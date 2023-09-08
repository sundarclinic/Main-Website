'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { Clock, Menu, Phone } from 'lucide-react';
import { NAVBAR_NAVIGATION } from '@/constants/navigation';
import { CONTACTS } from '@/constants/clinic';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetFooter,
} from '@/components/ui/sheet';

const Navbar = () => {
	const pathname = usePathname();

	return (
		<nav className='w-full'>
			<section className='max-w-7xl mx-auto p-4 flex w-full items-center justify-between flex-col md:flex-row gap-4'>
				<div className='flex items-center justify-between w-full md:w-fit'>
					<Link href={'/'} className='block w-32'>
						<Image
							src='/logo/logo-fit.png'
							alt='Sundar Clinic'
							width={100}
							height={100}
							className='w-full h-auto object-contain'
						/>
					</Link>
					<Sheet>
						<SheetTrigger asChild className='md:hidden'>
							<Button variant={'outline'}>
								<Menu />
							</Button>
						</SheetTrigger>
						<SheetContent className='flex flex-col h-full md:hidden'>
							<SheetHeader>
								<SheetTitle>Sundar Clinic</SheetTitle>
								<SheetDescription>
									Not just a better healthcare, but a better
									healthcare experience.
								</SheetDescription>
							</SheetHeader>
							<div>
								<ul className='flex gap-4 flex-col font-heading'>
									{NAVBAR_NAVIGATION.map((link) => {
										const isActive = pathname === link.url;
										return (
											<li
												key={`nav-${link.name}`}
												className='font-medium w-fit'
											>
												<Link
													href={link.url}
													target={link.target}
													className={`${
														isActive
															? 'text-primary-clinic'
															: ''
													} w-full`}
												>
													{link.name}
												</Link>
											</li>
										);
									})}
								</ul>
								<Button asChild className='mt-4 w-full'>
									<Link
										href={CONTACTS.googleLocation}
										target='_blank'
									>
										Visit Now
									</Link>
								</Button>
							</div>
							<SheetFooter className='mt-auto text-xs'>
								{CONTACTS.address}
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>
				<div className='flex items-center justify-between w-full md:w-1/2'>
					<div className='flex items-center justify-center gap-4'>
						<Clock />
						<p className='flex flex-col'>
							<span>Morning ‣ 9 a.m. - 1:30 p.m.</span>
							<span>Evening ‣ 1:30 p.m. - 9:30 p.m.</span>
						</p>
					</div>
					<div className='flex items-center justify-center gap-4'>
						<Phone />
						<Link href={`tel:${CONTACTS.phone}`}>
							{CONTACTS.phone}
						</Link>
					</div>
				</div>
				<Button asChild className='hidden md:block'>
					<Link href={CONTACTS.googleLocation} target='_blank'>
						Visit Now
					</Link>
				</Button>
			</section>
			<section className='w-full bg-secondary-clinic/5 px-4 py-2'>
				<ul className='max-w-7xl mx-auto flex gap-8 items-center justify-center font-heading'>
					{NAVBAR_NAVIGATION.map((link) => {
						const isActive = pathname === link.url;
						return (
							<li
								key={`nav-${link.name}`}
								className='font-medium w-fit'
							>
								<Link
									href={link.url}
									target={link.target}
									className={`${
										isActive ? 'text-primary-clinic' : ''
									}`}
								>
									{link.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</section>
		</nav>
	);
};

export default Navbar;
