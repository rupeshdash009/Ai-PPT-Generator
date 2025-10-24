import SliderStyle from '@/components/ui/custom/SliderStyle';
import { FirebaseDb } from '../../../../config/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type Project = {
  userInputPromt: string,
  projectId: string,
  createAt: string,
};

function Outline() {
  const { projectId } = useParams();
  const [projectDetail, setProjectDetail] = useState<Project | null>(null);

  useEffect(() => {
    if (projectId) {
      GetProjectDetail();
    }
  }, [projectId]);

  const GetProjectDetail = async () => {
    const docRef = doc(FirebaseDb, 'projects', projectId ?? '');
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) return;

    const data = docSnap.data() as Project;
    console.log(data);
    setProjectDetail(data);
  };

  return (
    <div className='flex justify-center  mt-28'>
      <div className='max-w-3xl w-full'>
        <h2 className='font-bold text-3xl'>setting and slider outline</h2>

        <SliderStyle/>
      </div>
    </div>
  );
}

export default Outline;
