import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUp,  Loader2Icon,  } from "lucide-react";
import { doc, setDoc } from "firebase/firestore";
import { FirebaseDb } from "../../../../config/FirebaseConfig";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function PromptBox() {


  const [userInput, setUserInput] = useState<string>();
  const [noOfSlider, setNoOfSlider] =useState<string>('4 to 6');
  const {user}= useUser();
  const[loading, setLoading]=useState(false)
  const navigate = useNavigate()

  const createAndSaveProject = async() =>{
    const projectId = uuidv4()
    setLoading(true)
    await setDoc(doc(FirebaseDb,'projects', projectId),{
      projectId:projectId,
      userInputPrompt:userInput,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:Date.now(),
      noOfSlider:noOfSlider
    })
    setLoading(false);
    navigate('/workspace/project/' +projectId+ '/outline')
  }


  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center mt-28">
        <h2 className="font-bold text-3xl space-y-4">
          {" "}
          decribe your topic, we'll design the PPT slides
        </h2>
        <p className="text-xl text-gray-500">
          your design will be saved at new project
        </p>

        <InputGroup className="mt-10">
          <InputGroupTextarea placeholder="Enter what kind up slider do you want create" 
          className="min-h-36"
          onChange={(event) => setUserInput(event.target.value)}

          ></InputGroupTextarea>
          <InputGroupAddon align={"block-end"}>
            
            <Select onValueChange={(value)=> setNoOfSlider(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder=" Select No. of sliders" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>No. of slider</SelectLabel>
                  <SelectItem value="4 to 6">4-6 sliders</SelectItem>
                  <SelectItem value="6 to 8">6-8 sliders</SelectItem>
                  <SelectItem value="8 to 12">8-12 sliders</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <InputGroupButton 
            className="rounded-full ml-auto  
            size= {'icon-sm'} 
            varient={'default'}"
            onClick={() =>createAndSaveProject()}
            disabled={!userInput}
            >
            
             {loading?<Loader2Icon className="animate-spin"/>: <ArrowUp/>}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}

export default PromptBox;
