import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const socialLinks = [
    { href: "https://www.facebook.com/profile.php?id=61559578016047", label: "Facebook" },
    { href: "https://www.linkedin.com/company/ekaya-spaces/", label: "LinkedIn" },
    { href: "https://www.youtube.com/@ekayaspaces", label: "YouTube" }
  ];

  const projects = [
    { title: "Projects in Bangalore", links: [
      { href: "/about-embrace", label: "Embrace" },
      { href: "/about-ellen", label: "Ellen" },
      { href: "/takshavi", label: "Takshavi" }
    ]},
    { title: "Projects in Goa", links: [
      { label: "Goa - Dona Paula" },
      { href: "/vista-do-mar", label: "— Vista Do Mar" },
      { label: "Moira" }
    ]}
  ];

  const aboutLinks = [
    { href: "/about-us", label: "Our Story" },
    { href: "/our-team", label: "Our Team" },
    { href: "/why-ekaya", label: "Why Ekaya" },
    { href: "/sustainability", label: "Sustainability" }
  ];

  return (
    <div className="z-50">
      <div className="lg:mt-[100px] mt-[30px] grid grid-cols-3 lg:w-[80%] mx-auto overflow-hidden z-50">
        {socialLinks.map((link, index) => (
          <Link key={index} href={link.href} className="justify-center align-center flex border group border-e-green p-4 text-xl poppins-light">
            {link.label}
            <div className="[grid-area:1/1] flex items-center justify-center transition ease-in-out group-hover:delay-300 translate-y-0 -translate-x-0 group-hover:-translate-y-1 group-hover:translate-x-2">
              ↗
            </div>
          </Link>
        ))}
      </div>

      <footer className="mx-auto bg-gray-200 p-6">
        <div className="lg:w-[80%] mx-auto">
          <Image src="/footer-logo.svg" className="pb-6" width={300} height={300} />
          <hr className="h-px border-t border-gray-300 pb-4 mx-auto" />
          <div className="grid lg:grid-cols-3 grid-1">
            <div>
              <h3 className="text-xl font-medium pb-5 poppins-medium">Contact Details</h3>
              <hr className="h-px border-t-2 border-gray-300 pb-4 mx-auto" />
              <p className="text-xl font-light text-gray-600 pb-6 poppins-light"># C 2, Shanthi Kiran apartments, Nandhi Durga Road, Bengaluru 560046</p>
              <p className="text-xl font-light text-gray-600 poppins-light">
                <span className="font-medium">Phone:</span> <Link href="tel:+91 98452 47374">+91 98452 47374</Link>
              </p>
              <p className="text-xl font-light text-gray-600 poppins-light">
                <span className="font-medium">Email:</span> <Link href="mailto:info@ekaya-spaces.com">info@ekaya-spaces.com</Link>
              </p>
            </div>
            <div className="lg:pl-16 mt-14 lg:mt-0">
              {projects.map((project, index) => (
                <div key={index}>
                  <h4 className="text-lg border p-2 border-e-green w-[220px]">{project.title}</h4>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    {project.links.map((link, i) => (
                      link.href ? (
                        <li key={i}>
                          <Link href={link.href} className="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            {link.label}
                          </Link>
                        </li>
                      ) : (
                        <li key={i} className="px-4 text-e-green poppins-light text-[18px]">{link.label}</li>
                      )
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-14 lg:mt-0">
              <h3 className="text-xl font-medium pb-5 poppins-medium">About Ekaya</h3>
              <hr className="h-px border-t-2 border-gray-300 pb-4 mx-auto" />
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-400 poppins-light">
                {aboutLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:w-[80%] mx-auto">
          <hr className="h-px border-t border-gray-300 mx-auto" />
          <div className="lg:flex justify-between py-6">
            <div className="text-[18px] poppins-light text-gray-600 lg:order-1 order-2">
              ©{new Date().getFullYear()} Ekaya. All Rights Reserved.
            </div>
            <div className="text-xl poppins-light text-gray-600 lg:order-2 order-1">
              <Link href="/terms-of-use">Terms of Use</Link> | <Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </div>
          <hr className="h-px border-t border-gray-300 pt-6 mx-auto" />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
