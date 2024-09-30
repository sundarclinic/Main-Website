/**
 * About Page - Hero Component
 */

// Dependencies
import React from 'react';
import Image from 'next/image';
import { Link } from '@/lib/routing';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

type HeroProps = React.ComponentProps<'section'>;

const Hero: React.FC<HeroProps> = () => {
	const t = useTranslations('pages.about.hero');

	return (
		<section className='max-w-7xl mx-auto w-full p-4 mt-8 relative min-h-[50vh] grid grid-cols-1 gap-8 md:grid-cols-2'>
			<div className='flex flex-col gap-4'>
				<p className='font-medium text-lg md:text-2xl'>
					{t('subheading')}
				</p>
				<h1 className='font-heading font-medium text-2xl md:text-4xl max-w-3xl'>
					{t('heading')}
				</h1>
				<p className='text-lg md:text-xl text-justify max-w-5xl text-slate-500'>
					{t('description')}
				</p>
				<Button asChild size={'lg'}>
					<Link href='#history'>{t('cta')}</Link>
				</Button>
			</div>
			<div className='flex items-center justify-center'>
				<div className='md:max-w-[80%] rounded-lg overflow-hidden'>
					<Image
						src='/images/about.svg'
						alt='Sundar Clinic'
						width={100}
						height={100}
						className='w-full h-auto object-contain z-10 relative'
						priority
						unoptimized
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
