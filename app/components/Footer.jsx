import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa6'
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import './style/style.css'

export default function Footer() {
  return (
    <footer className='bg-[#ff5c00]'>
      <div className='mx-auto w-full max-w-screen-xl'>
        <div className='grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4'>
          <div>
            <p className='text-sm text-white text-justify'>
             
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores tenetur eaque porro eum enim id dignissimos velit consectetur, exercitationem perspiciatis mollitia magni tempora est sunt fugiat. Fugit, vero alias.
            </p>
            <div
              id='sociall'
              className='flex mt-4 md:mt-0 space-x-5 rtl:space-x-reverse'
            >
              <a
                className='text-white hover:text-blue-800 dark:hover:text-white bg-black p-3 rounded-circle'
                href='https://www.facebook.com/cappello.pk'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebookF size={20} />
              </a>

              <a
                className='text-white hover:text-pink-800 dark:hover:text-white bg-black p-3 rounded-circle'
                href='https://www.instagram.com/cappello.pk/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram size={20} />
              </a>
              <a
                className='text-white hover:text-pink-600 dark:hover:text-white bg-black p-3 rounded-circle'
                href='https://www.tiktok.com/@cappello.pk'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaTiktok size={20} />
              </a>
              <a
                className='text-white hover:text-red-700 dark:hover:text-white bg-black p-3 rounded-circle'
                href='https://www.youtube.com/@cappello-pk'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          {/* <center> */}
            <div>
              <h2 className='mb-6 text-sm text-center font-semibold text-white uppercase dark:text-white '>
                Company
              </h2>
              <div className='text-white dark:text-gray-400 font-medium text-center'>
                <p className='mb-4'>
                  <Link href={'/'} className='hover:underline no-underline text-white '>
                    Home
                  </Link>
                </p>
                <p className='mb-4'>
                  <Link href={'/about'} className='hover:underline no-underline text-white'>
                    About
                  </Link>
                </p>
                <p className='mb-4'>
                  <Link href={'/#Products'} className='hover:underline no-underline text-white'>
                    Menu
                  </Link>
                </p>
                <p className='mb-4'>
                  <Link href={'/contact'} className='hover:underline no-underline text-white'>
                    Contact
                  </Link>
                </p>
              </div>
            </div>
          {/* </center> */}
          {/* <center> */}
          <div>
              <h2 className='mb-6 text-sm text-center font-semibold text-white uppercase dark:text-white '>
                Company
              </h2>
              <div className='text-white dark:text-gray-400 font-medium text-center'>
                <p className='mb-4'>
                  <Link href={'/'} className='hover:underline no-underline text-white '>
                    Home
                  </Link>
                </p>
                <p className='mb-4'>
                  <Link href={'/about'} className='hover:underline no-underline text-white'>
                    About
                  </Link>
                </p>
                <p className='mb-4'>
                  <Link href={'/#Products'} className='hover:underline no-underline text-white'>
                    Menu
                  </Link>
                </p>
                <p className='mb-4'>
                  <Link href={'/contact'} className='hover:underline no-underline text-white'>
                    Contact
                  </Link>
                </p>
              </div>
            </div>
          {/* </center> */}
         {/* <center> */}
         <div>
              <h2 className='mb-6 text-sm text-center font-semibold text-white uppercase dark:text-white '>
                Company
              </h2>
              <div className='text-white dark:text-gray-400 font-medium text-center'>
                <p className='mb-4'>
                  <Link href={'/'} className='hover:underline no-underline text-white '>
                    Home
                  </Link>
                </p>
                <p className='mb-4'>
                  <Link href={'/about'} className='hover:underline no-underline text-white'>
                    About
                  </Link>
                </p>
                <p className='mb-4'>
                  <Link href={'/#Products'} className='hover:underline no-underline text-white'>
                    Menu
                  </Link>
                </p>
                <p className='mb-4'>
                  <Link href={'/contact'} className='hover:underline no-underline text-white'>
                    Contact
                  </Link>
                </p>
              </div>
            </div>
          {/* </center> */}
        </div>
        <center>
          <div className='px-4 py-6 bg-white md:flex md:items-center md:justify-center border-t'>
            <span className='text-sm text-center text-black dark:text-gray-300 sm:text-center'>
              © 2025{' '}
              <a
                style={{ textDecoration: 'none' }}
                href='https://www.instagram.com/cappello.pk/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Quick Menu
              </a>
              . All Rights Reserved Web Design & Developed by{' '}
              <a
                style={{ textDecoration: 'none' }}
                href='https://www.aeonsoft.com.pk/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='text-black' style={{ fontWeight: 'bolder' }}>
                  Aeonsoft & Marketing.
                </span>
              </a>
            </span>
          </div>
        </center>
      </div>
    </footer>
  )
}
