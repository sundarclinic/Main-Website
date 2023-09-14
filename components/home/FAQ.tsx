import React from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQProps {
	faqs: FAQData;
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
	return (
		<section className='max-w-3xl mx-auto w-full p-4 mt-8'>
			<h3 className='text-2xl font-heading text-center font-medium'>
				Frequently Asked Questions
			</h3>
			<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mx-auto mt-2' />
			<Accordion type='single' collapsible className='w-full mt-8'>
				{faqs?.map((faq) => (
					<AccordionItem
						key={`faq-${faq.question}`}
						value={faq.question}
					>
						<AccordionTrigger>{faq.question}</AccordionTrigger>
						<AccordionContent>{faq.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
};

export default FAQ;
