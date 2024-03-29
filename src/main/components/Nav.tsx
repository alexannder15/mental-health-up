/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from "react-router-dom";
import courses from '../../data/courses'


// const callsToAction = [
// 	{ name: 'Watch Demo', href: '#', icon: PlayIcon },
// 	{ name: 'Contact Sales', href: '#', icon: PhoneIcon },
// ]
// const resources = [
// 	{
// 		name: 'Help Center',
// 		description: 'Get all of your questions answered in our forums or contact support.',
// 		href: '#',
// 		icon: SupportIcon,
// 	},
// 	{
// 		name: 'Guides',
// 		description: 'Learn how to maximize our platform to get the most out of it.',
// 		href: '#',
// 		icon: BookmarkAltIcon,
// 	},
// 	{
// 		name: 'Events',
// 		description: 'See what meet-ups and other events we might be planning near you.',
// 		href: '#',
// 		icon: CalendarIcon,
// 	},
// 	{ name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
// ]
// const recentPosts = [
// 	{ id: 1, name: 'Boost your conversion rate', href: '#' },
// 	{ id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
// 	{ id: 3, name: 'Improve your customer experience', href: '#' },
// ]

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ')
}

export default function Nav() {

	const buttonEl = useRef() as React.MutableRefObject<HTMLButtonElement>;

	return (

		<Popover className="relative bg-white" style={{ fontFamily: 'Bitter, serif' }}>
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-4 sm:px-6">
						<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
							<Link to="/mental-health-up/" className="flex justify-start items-center lg:w-0 lg:flex-1">
								<span className="sr-only">Workflow</span>
								<img
									className="w-auto sm:h-10 flex-shrink-0 text-indigo-600"
									style={{ height: "48px" }}
									src="mental-health.svg"
									alt="mental-healt-logo"
								/>
								<p className="text-3xl w-full text-gray-900" style={{ fontFamily: 'Libre Baskerville, serif' }}>Mental Health Up </p>
							</Link>

							<div className="mr-2 -my-2 md:hidden">
								<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">Open menu</span>
									<MenuIcon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
							</div>
							<Popover.Group as="nav" className="hidden md:flex space-x-10">
								<Link className="text-base font-medium text-gray-500 hover:text-gray-900" to="/mental-health-up/">Inicio</Link>
								<Link className="text-base font-medium text-gray-500 hover:text-gray-900" to="/mental-health-up/contact">Contacto</Link>
								<Popover className="relative">
									{({ open }) => (
										<>
											<Popover.Button
												ref={buttonEl}
												className={classNames(
													open ? 'text-gray-900' : 'text-gray-500',
													'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
												)}
											>
												<span>Cursos</span>
												<ChevronDownIcon
													className={classNames(
														open ? 'text-gray-600' : 'text-gray-400',
														'ml-2 h-5 w-5 group-hover:text-gray-500'
													)}
													aria-hidden="true"
												/>
											</Popover.Button>

											<Transition
												show={open}
												as={Fragment}
												enter="transition ease-out duration-200"
												enterFrom="opacity-0 translate-y-1"
												enterTo="opacity-100 translate-y-0"
												leave="transition ease-in duration-150"
												leaveFrom="opacity-100 translate-y-0"
												leaveTo="opacity-0 translate-y-1"
											>
												<Popover.Panel
													static
													className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
												>
													<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
														<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
															{courses.map((item) => (
																<Link key={item.id} to={`/mental-health-up/course/${item.id}`}
																	onClick={() => buttonEl.current?.click()}
																	className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
																	<item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
																	<div className="ml-4">
																		<p className="text-base font-medium text-gray-900">{item.name}</p>
																		<p className="mt-1 text-sm text-gray-500">{item.description}</p>
																	</div>
																</Link>
															))}
														</div>
													</div>
												</Popover.Panel>
											</Transition>
										</>
									)}
								</Popover>

							</Popover.Group>
							<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
								<button className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
									Registrarse
                </button>
								<button 
									className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
								>
									Iniciar sesión
                </button>
							</div>
						</div>
					</div>





					<Transition
						show={open}
						as={Fragment}
						enter="duration-200 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Popover.Panel
							focus
							static
							className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10"
						>
							<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
								<div className="pt-5 pb-6 px-5">
									<div className="flex items-center justify-between">
										<div className="flex items-center">
											<img
												className="w-auto sm:h-10 flex-shrink-0 text-indigo-600"
												style={{ height: "48px" }}
												src="mental-health.svg"
												alt="mental-healt-logo"
											/>
											<p className="text-xl w-full text-gray-900" style={{ fontFamily: 'Libre Baskerville, serif' }}>Mental Health Up </p>
										</div>
										<div className="">
											<Popover.Button
												id="buttonClose"
												className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
												<span className="sr-only">Close menu</span>
												<XIcon className="h-6 w-6" aria-hidden="true" />
											</Popover.Button>
										</div>
									</div>
									<div className="mt-6">
										<Link
											onClick={() => document.getElementById('buttonClose')?.click()}
											className="text-base font-medium text-gray-500 hover:text-gray-900" to="/mental-health-up/">Inicio</Link>
									</div>
									<div className="mt-6">
										<Link
											onClick={() => document.getElementById('buttonClose')?.click()}
											className="text-base font-medium text-gray-500 hover:text-gray-900" to="/mental-health-up/contact">Contacto</Link>
									</div>
									<div className="mt-6">
										<nav className="grid gap-y-8">
											{courses.map((item) => (
												<Link key={item.id} to={`/mental-health-up/course/${item.id}`}
													onClick={() => document.getElementById('buttonClose')?.click()}
													className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" >
													<item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
													<span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
												</Link>
											))}
										</nav>
									</div>
								</div>
								<div className="py-6 px-5 space-y-6">
									<div>
										<button
											className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
										>
											Iniciar sesión
                    </button>
										<p className="mt-6 text-center text-base font-medium text-gray-500">
											No tienes una cuenta?{' '}
											<button className="text-indigo-600 hover:text-indigo-500">
												Registrarse
                      </button>
										</p>
									</div>
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	)
}
