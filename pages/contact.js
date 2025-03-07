import Head from 'next/head';
import Navbar from '../components/Navbar'; // Pastikan nama file benar

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact - NontonX</title>
        <meta name="description" content="Contact us at NontonX." />
      </Head>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="max-w-lg mx-auto">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Your message"></textarea>
            </div>
            <div className="text-center">
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out" type="submit">
                Send Message
              </button>
            </div>
          </form>
          <div className="mt-8 text-center">
            <p className="text-gray-700 dark:text-gray-300">Or you can reach us at:</p>
            <p className="text-gray-700 dark:text-gray-300">bilariko2@gmail.com</p>
          </div>
        </div>
      </main>
    </div>
  );
}
