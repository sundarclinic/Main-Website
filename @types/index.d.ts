type FAQData = ReadonlyArray<
	Readonly<{
		_id: string;
		question: string;
		answer: string;
	}>
>;

type TestimonailData = ReadonlyArray<
	Readonly<{
		_id: string;
		stars: number;
		name: string;
		review: string;
		link: string;
	}>
>;

type GalleryImageData = ReadonlyArray<
	Readonly<{
		_id: string;
		caption: string;
		image: string;
		alt: string;
	}>
>;

type TeamMemberData = ReadonlyArray<
	Readonly<{
		_id: string;
		name: string;
		role: string;
		qualifications: string;
		bio: string;
		registrationNo: string;
		image: string;
		alt: string;
		languages: Array<Partial<'english' | 'tamil' | 'hindi'>>;
	}>
>;

type LegalDataBase = Readonly<{
	title: string;
	descriptions: Array<string>;
}>;

type TermsAndConditionsData = ReadonlyArray<LegalDataBase>;

type PrivacyPolicyData = ReadonlyArray<LegalDataBase>;
