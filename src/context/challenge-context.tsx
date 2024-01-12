// ChallengeContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { v4 as uuidv4 } from "uuid";

interface Challenge {
  id: string;
  title: string;
  date: Date;
  label: string;
}

interface ChallengeContextProps {
  challenges: Challenge[];
  addChallenge: (newChallenge: {
    title: string;
    label: string;
    date: Date;
  }) => void;
  updateChallenge: (
    challengeId: string,
    updatedChallenge: Partial<Challenge>
  ) => void;
  deleteChallenge: (challengeId: string) => void;
  duplicateChallenge: (challenge: Challenge) => void;
}

const ChallengeContext = createContext<ChallengeContextProps | undefined>(undefined);

interface ChallengeProviderProps {
  children: ReactNode;
}

export const ChallengeProvider: React.FC<ChallengeProviderProps> = ({ children }) => {
  const [challenges, setChallenges] = useState<Challenge[]>([]);

  const getChallenges = () => {
    try {
      const challengeJson = localStorage.getItem("challenges");

      if (!challengeJson) {
        return [];
      }

      const parsedChallenges = JSON.parse(challengeJson);

      if (Array.isArray(parsedChallenges)) {
        return parsedChallenges;
      } else if (typeof parsedChallenges === "object") {
        // If the existing data is an object, treat it as a single Challenge
        return [parsedChallenges];
      } else {
        console.error("Invalid format for existing challenges:", parsedChallenges);
        return [];
      }
    } catch (error) {
      console.error("Error parsing challenges from local storage:", error);
      return [];
    }
  };

  const saveChallenges = (data: any) => {
    const challengesJson = JSON.stringify(data);
    localStorage.setItem("challenges", challengesJson);
  };

 const addChallenge = (newChallenge: {
   title: string;
   label: string;
   date: Date;
 }) => {
   const challenges = getChallenges();

   if (Array.isArray(challenges)) {
     const updatedChallenges = [
       ...challenges,
       createChallenge(
         newChallenge.title,
         newChallenge.date, // Fix the order here (title, date, label)
         newChallenge.label
       ),
     ];
     saveChallenges(updatedChallenges);
     setChallenges(updatedChallenges);
   } else {
     console.error("Existing challenges is not an array:", challenges);
     // Handle the situation where challenges is not an array
     const updatedChallenges = [
       createChallenge(
         newChallenge.title,
         newChallenge.date, // Fix the order here (title, date, label)
         newChallenge.label
       ),
     ];
     saveChallenges(updatedChallenges);
     setChallenges(updatedChallenges);
   }
 };

  const updateChallenge = (challengeId: string, updatedChallenge: Partial<Challenge>) => {
    const challenges = getChallenges();

    const updatedChallenges = challenges.map((challenge) =>
      challenge.id === challengeId ? { ...challenge, ...updatedChallenge } : challenge
    );
    saveChallenges(updatedChallenges);

    setChallenges(updatedChallenges);
  };

  const deleteChallenge = (id: string) => {
    const challengeId = id;
    const challenges = getChallenges();
    const updatedChallenges = challenges.filter((challenge: any) => challenge.id !== challengeId);
    saveChallenges(updatedChallenges);
    setChallenges(updatedChallenges);
  };

  const duplicateChallenge = (challenge: Challenge) => {
    const duplicatedChallenge = { ...challenge, id: uuidv4() };
    addChallenge(duplicatedChallenge);
  };

  useEffect(() => {
    const initialChallenges = getChallenges();
    setChallenges(initialChallenges);
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <ChallengeContext.Provider
      value={{ challenges, duplicateChallenge, addChallenge, updateChallenge, deleteChallenge }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};

export const useChallenge = () => {
  const context = useContext(ChallengeContext);
  if (!context) {
    throw new Error("useChallenge must be used within a ChallengeProvider");
  }
  return context;
};

const createChallenge = (
  title: string,
  date: Date,
  label: string
): Challenge => {
  return {
    id: uuidv4(),
    title,
    date,
    label,
  };
};

