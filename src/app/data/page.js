import useSWR from 'swr'
import UpdatingImageBase64 from '../components/updating_image_base64';

export default function Home() {
  return (
    <>
      <main className="bg-white">
        <h1>heheheaw</h1>
        <div className="basis-1/2 justify-center items-center">
          <UpdatingImageBase64 url='http://localhost:25565/plot' intervalTime={200}></UpdatingImageBase64>
        </div>
      </main>
    </>
  );
}
