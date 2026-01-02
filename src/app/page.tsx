import Hello from "@/src/app/components/hello";
import { DayNote } from "@/src/pages/create-day-note"

const Home = () => {
  return (
    <>
      <Hello></Hello>
      <main>
        <DayNote />
        {/* <div>Halo</div> */}
      </main>
    </>
  )
}

export default Home