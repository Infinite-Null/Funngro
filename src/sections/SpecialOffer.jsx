import offer  from "../assets/images/social.jpg";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
              The name says it all.<br/>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              "Its <span className="text-coral-red">Fun</span> to <span className="text-coral-red">Grow</span>"
          </h2>

          <p className="mt-4 lg:max-w-lg info-text">Funngro is built by educators, Tech enthusiasts, IIM alumni, Finance experts but most importantly by Loving parents. We are thankful to those mentors who helped us in early stage of our lives and Funngro is our effort to give back to the society. Funngro is a mission to enable Teenagers to become Financially empowered and grow up to be responsible citizens.</p>
        <p className="mt-6 lg:max-w-lg info-text">Mission - Enable Smart Teenagers and Smart Companies to realize their full potentials</p>

        <div className="mt-11 flex flex-wrap gap-4">
          {/*<Button label="View details" />*/}
          {/*  <Button label="View details" />*/}
          <Button label="Payal Jain, CEO" backgroundColor="bg-white" borderColor="border-slate-gray" borderRadius="rounded-[4px]" textColor="text-slate-gray"  link={"https://www.linkedin.com/in/payal-jain-8780191"}/>
          <Button label="Anik Jain, CGO" backgroundColor="bg-white" borderColor="border-slate-gray" borderRadius="rounded-[4px]" textColor="text-slate-gray" link={"https://www.linkedin.com/in/anik-jain"}/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer;
