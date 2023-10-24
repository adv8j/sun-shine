import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function BookAportalButton() {
  const [open, setOpen] = useState(false);
  const [selectedCounselor, setSelectedCounselor] = useState("");
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  // Function to send an email to the selected counselor
  const sendEmail = () => {
    if (selectedCounselor) {
      const { name, email, date, time } = bookingDetails;
      const subject = `Appointment Booking Request with ${selectedCounselor}`;
      const body = `Dear ${selectedCounselor}, I would like to book an appointment with you on ${date} at ${time}. Name: ${name} Email: ${email} Thank you`;
      const emailLink = `mailto:${selectedCounselor}?subject=${subject}&body=${body}`;

      // Open the email link in a new tab
      window.open(emailLink, "_blank");
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="">
        <div className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </div>
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => {
            setOpen(false);
            setSelectedCounselor("");
          }}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:text-gray-200 sm:dark:text-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-200"
                      >
                        Book an appointment
                      </Dialog.Title>
                      <div className="mt-2">
                        <label className="block text-sm text-gray-500 dark:text-gray-400">
                          Select a Counselor:
                        </label>
                        <select
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          onChange={(e) => setSelectedCounselor(e.target.value)}
                        >
                          <option value="" disabled selected>
                            Choose a Counselor
                          </option>
                          <option value="counselor1@example.com">
                            Counselor 1
                          </option>
                          <option value="counselor2@example.com">
                            Counselor 2
                          </option>
                          <option value="counselor3@example.com">
                            Counselor 3
                          </option>
                        </select>
                      </div>
                      <div className="mt-2">
                        <label className="block text-sm text-gray-500 dark:text-gray-400">
                          Your Name:
                        </label>
                        <input
                          type="text"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder="Your Name"
                          onChange={(e) =>
                            setBookingDetails({
                              ...bookingDetails,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="mt-2">
                        <label className="block text-sm text-gray-500 dark:text-gray-400">
                          Your Email:
                        </label>
                        <input
                          type="email"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder="Your Email"
                          onChange={(e) =>
                            setBookingDetails({
                              ...bookingDetails,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="mt-2">
                        <label className="block text-sm text-gray-500 dark:text-gray-400">
                          Date:
                        </label>
                        <input
                          type="date"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          onChange={(e) =>
                            setBookingDetails({
                              ...bookingDetails,
                              date: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="mt-2">
                        <label className="block text-sm text-gray-500 dark:text-gray-400">
                          Time:
                        </label>
                        <input
                          type="time"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          onChange={(e) =>
                            setBookingDetails({
                              ...bookingDetails,
                              time: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 sm:dark:bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={sendEmail}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Book via Email
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:mr-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
