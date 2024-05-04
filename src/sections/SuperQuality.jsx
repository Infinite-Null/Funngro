import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            Why work with <span className="text-coral-red">Teens?</span>
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">Teenagers are the smarter generations, more clued in to your customer mindset, not spoilt by years of experience hence being cost effective delivery of high quality of work.</p>
        <p className="mt-6 lg:max-w-lg info-text">Helps companies grow rapidly with timely project delivery.</p>

        <div className="mt-11">
          <Button label="Start Now" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality;
