function Blog2() {
  return (
    <div className="grid">
      <div className="bg-[#8774d9] text-white py-3 px-2">
        <p>Comprehensive Dental Services in Anand, Gujarat: What to Expect</p>
      </div>
      <div className="flex justify-between items-center py-3">
        <p className="text-gray-600">
          When it comes to dental care, a wide range of services are available
          to meet the unique needs of patients. In Anand, Gujarat, our practice
          is committed to providing comprehensive dental services to ensure your
          oral health and hygiene. In this blog, we&apos;ll walk you through the
          various dental services we offer, their importance, and how they
          benefit our patients.
        </p>
      </div>
      {/* first */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-4">
        <div className="md:col-span-2 grid place-items-center">
          <img src="/assets/Dentist2.png" alt="" className="max-w-[400px]" />
        </div>
        <div className="md:col-span-2">
          <div>
            <p className="text-[#8774d9]">1.Teeth Cleaning Procedures</p>
            <p className="text-gray-600 text-sm py-2">
              Regular teeth cleaning, also known as dental prophylaxis, is the
              cornerstone of maintaining good oral health. Our professional
              dental hygienists are trained to remove plaque and tartar buildup,
              which can lead to gum disease and tooth decay. Teeth cleaning not
              only keeps your smile looking bright but also helps prevent dental
              issues down the road.
            </p>
          </div>
          <div>
            <p className="text-[#8774d9]">2.Root Canal Treatment</p>
            <p className="text-gray-600 text-sm py-2">
              A root canal procedure becomes necessary when the inner pulp of a
              tooth becomes infected or damaged. This treatment can save a tooth
              that might otherwise require extraction. Our experienced
              endodontists use advanced techniques to clean and seal the root
              canal, relieving pain and preserving your natural smile.
            </p>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-4">
        <div className="md:col-span-2 grid place-items-center md:order-2">
          <img src="/assets/Dentist3.png" alt="" className="max-w-[400px]" />
        </div>
        <div className="md:col-span-2 ">
          <div>
            <p className="text-[#8774d9]">3.Cosmetic Dentistry Options</p>
            <p className="text-gray-600 text-sm py-2">
              Your smile is a significant part of your overall appearance and
              self-confidence. Cosmetic dentistry encompasses various procedures
              that enhance the aesthetics of your teeth. Our cosmetic dentists
              offer services like teeth whitening, dental veneers, and
              orthodontics to help you achieve the smile you&apos;ve always
              desired.
            </p>
          </div>
          <div>
            <p className="text-[#8774d9]">4.Teeth Whitening</p>
            <p className="text-gray-600 text-sm py-2">
              Brighten your teeth and remove stains to achieve a whiter, more
              radiant smile.
            </p>
          </div>
        </div>
      </div>
      {/* third */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-4">
        <div className="md:col-span-2 grid place-items-center">
          <img src="/assets/Dentist4.png" alt="" className="max-w-[400px]" />
        </div>
        <div className="md:col-span-2">
          <div>
            <p className="text-[#8774d9]">5.Dental Veneers</p>
            <p className="text-gray-600 text-sm py-2">
              Thin porcelain shells are used to cover imperfections and create a
              flawless, natural-looking smile.
            </p>
          </div>
          <div>
            <p className="text-[#8774d9]">6.Orthodontics</p>
            <p className="text-gray-600 text-sm py-2">
              Dental emergencies can occur suddenly and at the most inconvenient
              times. Our practice offers emergency dental care to address urgent
              issues such as severe toothaches, broken teeth, or injuries. Quick
              access to care can make a significant difference in preserving
              your dental health.
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-gray-600 text-sm py-2">
          Our goal is to provide our patients in Anand, Gujarat, with a one-stop
          solution for all their dental needs. With a team of skilled
          professionals, advanced technology, and a commitment to patient
          comfort, we&apso;re here to ensure your dental health and
          satisfaction.
        </p>
      </div>
    </div>
  );
}

export default Blog2;
