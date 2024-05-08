
import Link from "next/link";




const Footer = () => {

    return (
        <div className="w-full bottom-0">
            {/* <div className="bg-white flex text-black drop-shadow-[0_0_15px_rgba(0,0,0,0.18)]">
                <Images image='/images/rectangle.svg' imgHeight={100} imgWidth={416} />
                <div className="w-[40%] flex justify-evenly">
                    <div className="py-5"><span className="text-sm ">Join our community and become a</span>
                        <Text text={'Volunteer!'} textClasses='text-4xl font-semibold' />
                    </div>
                    <div className="h-full flex py-9">
                        <Button text='Connect With Us!' className='bg-tealGreen flex justify-center h-9 w-52 py-1 text-white rounded-md' />
                    </div>
                </div>
                <Images image='/images/rectangle.svg' imgHeight={100} imgWidth={416} />
            </div> */}
            <div className="bg-black">
                <div className="w-full flex  p-2 md:px-12 md:py-5 m-0">
                    <section className="">
                        <div width={150} height={52} className='bg-white flex justify-center item-center p-2 rounded-lg mb-7 w-20 md:w-[170px]' />
                        <h4  className='text-[10px] md:text-sm w-40 md:w-72 text-white'>98, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560017</h4>
                        <div className="flex pt-8 w-[50%] md:w-[58%] justify-between">
                            <a href='https://www.facebook.com/ManipalHospitalsIndia' target={'_blank'} rel="noreferrer">
                                {/* <Icon image='/images/facebook.svg' height={28} width={28} className='w-4 md:w-7 cursor-pointer' /> */}
                            </a>
                            <a href='https://www.instagram.com/manipalhospitals/' target={'_blank'} rel="noreferrer">
                                {/* <Icon image='/images/instagram.svg' height={28} width={28} className='w-4 md:w-7 cursor-pointer' /> */}
                            </a>
                            <a href='https://twitter.com/ManipalHealth' target={'_blank'} rel="noreferrer">
                                {/* <Icon image='/images/twitterIcon.svg' height={28} width={28} className='w-4 md:w-7 cursor-pointer' /> */}
                            </a>
                            <a href='https://www.youtube.com/channel/UCSljO84JCPeaefyHe-8voIg' className="flex items-center" target={'_blank'} rel="noreferrer">
                                {/* <Icon image='/images/youtube.svg' height={28} width={28} className='w-4 md:w-7 cursor-pointer' /> */}
                            </a>
                        </div>
                    </section>
                    <section className="flex flex-col text-right w-full justify-evenly md:pt-14">
                        <div>
                            <Link href="/events/past" className="text-white text-[10px] underline md:no-underline underline-offset-2 md:text-base">Events
                            </Link>
                        </div>
                        <div>
                            <Link href='/aboutUs/' className="text-white text-[10px] underline md:no-underline underline-offset-2 md:text-base">About Us</Link>
                        </div>
                        <div>
                            <Link href='https://www.manipalhospitals.com/media/digital-media/' target='_blank' className="text-white text-[10px] underline md:no-underline underline-offset-2 md:text-base">News & Media</Link>
                        </div>
                        <div>
                            <Link href='/newsbulletin' className="text-white text-[10px] underline md:no-underline underline-offset-2 md:text-base">Newsbulletin</Link>
                        </div>
                        <div>
                            <Link href='/leader-message' className="text-white text-[10px] underline md:no-underline underline-offset-2 md:text-base">Message From Leaders Desk</Link>
                        </div>
                        <div>
                            <Link href='https://www.manipalhospitals.com/contact-us/' target='_blank' className="text-white text-[10px] underline md:no-underline underline-offset-2 md:text-base">Contact Us</Link>
                        </div>
                        <div>
                            <Link href='/sitemap' target='_blank' className="text-white text-[10px] underline md:no-underline underline-offset-2 md:text-base">Sitemap</Link>
                        </div>
                    </section>
                </div>
                <div className="block md:hidden m-0 pb-1">
                    <section className=" text-white w-full flex justify-evenly">
                        <Link href='/csr-policy' className="px-4 text-[8px] md:text-base">CSR Policy</Link>
                        <Link href='/disclaimer' className="px-4 text-[8px] md:text-base">Disclaimer</Link>
                        <Link href='/privacy-policy' className="px-4 text-[8px] md:text-base">Privacy Policy</Link>
                        <Link href='/terms-and-conditions' className="px-4 text-[8px] md:text-base">Terms & Conditions</Link>
                    </section>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-700">
                <section className="col-span-1 text-[6px] md:text-base">
                    <div className="flex text-white py-2 justify-center">
                        <h3 className='px-1 md:px-3'>Copyright</h3>
                        {/* <Icon image='/images/copy.svg' height={15} width={15} className='w-1.5 md:w-2.5' /> */}
                        <h3 className='px-1 md:px-3'>2023 Manipal Hospitals - All Rights Reserved</h3>
                    </div>
                </section>
                <section className=" col-span-1 text-white justify-center py-2 hidden md:flex ">
                    <Link href='/csr-policy' className="px-4">CSR Policy</Link>
                    <Link href='/disclaimer' className="px-4">Disclaimer</Link>
                    <Link href='/privacy-policy' className="px-4">Privacy Policy</Link>
                    <Link href='/terms-and-conditions' className="px-4">Terms & Conditions</Link>
                </section>
            </div>
        </div>
    )
}

export default Footer;
