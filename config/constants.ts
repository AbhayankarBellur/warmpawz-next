// Design System Constants

// Colors
export const COLORS = {
	primary: "#F5A855",
	primaryHover: "#E09642",
	white: "#FFFFFF",
	black: "#000000",
	textMuted: "rgba(0, 0, 0, 0.8)",
	border: "#F5A855",
} as const;

// Gradient Backgrounds
export const GRADIENTS = {
	warm: "linear-gradient(180deg, #F69052 0%, #FAD3B5 60%, #FFF2E6 100%)",
	brandTinted: "linear-gradient(180deg, #FFF1E6 0%, #FFF8D6 45%, #FFFFFF 100%)",
	white: "#FFFFFF",
} as const;

// Breakpoints (in pixels)
export const BREAKPOINTS = {
	mobile: 768,
	tablet: 1024,
	desktop: 1280,
} as const;

// Animation Durations (in milliseconds)
export const ANIMATIONS = {
	fast: 150,
	normal: 300,
	slow: 500,
	loadingDissolution: 300,
	fadeIn: 700,
	scrollDebounce: 16, // ~60fps
} as const;

// Layout Constants
export const LAYOUT = {
	navbarHeight: "pt-32",
	navbarTop: "top-4",
	navbarZIndex: "z-40",
	footerZIndex: "z-10",
} as const;

// Routes
export const ROUTES = {
	home: "/",
	about: "/about",
	services: "/services",
	blog: "/blog",
	blogArticle: "/blog/:articleId",
	newsEvents: "/news-events",
	careers: "/careers",
	policies: "/policies",
	userWalkthrough: "/user-walkthrough",
	vendorOnboarding: "/vendor-onboarding",
	notFound: "*",
} as const;

//Team Members
export const teamMembers = [
	{
		name: "Vikram Bellur",
		role: "Leader of the Pack • Chief Executive Officer",
		avatar: "VB",
		description:
			"Part strategist, part storyteller, and full-time believer in building things with heart. Vikram founded Warmpawz to reimagine pet care as something warmer, more human, and deeply responsible — bringing together pet parents and care providers into one trusted ecosystem. When he's not shaping the vision, he's usually thinking about how technology, empathy, and good design can make life better for pets and the people who love them. Vikram Bellur is an experienced business leader with a strong track record over 28 years driving growth and strategic impact across global technology and digital services.",
	},
	{
		name: "Ketan Hirani",
		role: "Architect of the Pack • Chief Product Officer",
		avatar: "KH",
		description:
			"Ketan Hirani is the architect behind the Warmpawz platform — shaping the technology that thoughtfully connects pet parents with trusted care providers. With a strong product and engineering mindset developed over 20 years, he leads the design and development of systems that prioritise reliability, ease of use, and real-world empathy. At Warmpawz, Ketan translates complex needs into simple, human-centred experiences — ensuring that every interaction between a pet parent and a provider feels seamless, secure, and intuitive. A leader who relies on his Animal Instincts (AI) to build robust scalable systems.",
	},
	{
		name: "Niranjan Delavictoire",
		role: "Voice of the Pack • Chief Marketing Officer",
		avatar: "ND",
		description:
			"Niranjan Delavictoire is a seasoned marketing and business leader with over 30 years of deep experience in shaping strategic brand narratives and driving growth across technology and services sectors. He has led direct and indirect sales, major accounts, business development and integrated marketing initiatives throughout his career. A passionate communicator with a knack for building meaningful connections, Niranjan brings this same spirit to Warmpawz — where every pet story and every service deserves thoughtful expression and trust. Outside his professional life, he's also been a devoted pet parent to a golden retriever, bringing first-hand insight into the joys and responsibilities of pet care.",
	},
];

// Video URLs
export const VIDEOS = {
	user: {
		adoption: "/videos/adoption-v2.mp4",
		veterinary: "/videos/petsVET_1.mp4",
		training: "/videos/pet-training.mp4",
		boarding: "/videos/pet-boarding-new.mp4",
		products: "/videos/pawsome-mart.mp4",
		sunset: "/videos/pet-sunset.mp4",
	},
	vendor: {
		step1: "/videos/step1.mov",
		step2: "/videos/step2.mov",
		step3: "/videos/step3.mov",
		step4: "/videos/step4.mov",
		step5: "/videos/step5.mov",
		step6: "/videos/step6.mov",
		step7: "/videos/step7.mov",
	},
	loading: {
		desktop: "/videos/loading.mov",
		mobile: "/videos/loading phone.mov",
	},
} as const;

// Scroll Thresholds
export const SCROLL = {
	navbarShowThreshold: 50,
	navbarHideThreshold: 100,
} as const;

// Session Storage Keys
export const STORAGE_KEYS = {
	hasShownLoading: "hasShownLoading",
} as const;

export const NavLinks = [
	{ name: "Home", link: "/", icon: "home" },
	{ name: "Services", link: "/services" },
	{ name: "Articles", link: "/blog" },
	{ name: "News & Events", link: "/news-events" },
];

export interface Service {
	id: number;
	name: string;
	isActive: boolean;
	image: string;
	description: string;
	forParents?: string;
	forProviders?: string;
	providerLabel?: string;
}

export const services: Service[] = [
	{
		id: 1,
		name: "Adoption",
		isActive: true,
		image: "/images/adoption.png",
		description:
			"Bringing pet parents and ethical adoption partners together to ensure every pet is welcomed into a prepared, loving home. From Discovery to Consultant on Call, the platform ensures parents are prepared for the beautiful experiences ahead!",
		forParents:
			"Find adoptable pets and ethical breeders near you, with verified guidance to start pet parenthood responsibly and confidently.",
		forProviders:
			"Connect with informed pet parents through a trusted adoption platform that supports ethical practices and the right matches.",
		providerLabel: "For Adoption Centres & Ethical Breeders",
	},
	{
		id: 2,
		name: "Veterinary",
		isActive: true,
		image: "/images/vet.png",
		description:
			"Connecting pet parents with trusted veterinarians through a transparent, compassionate care ecosystem. From Availability to convenient doorstep healthcare management, the platform ensures parents and providers take advantage of always being able to address health queries.",
		forParents:
			"Discover trusted veterinary services near you — from vaccinations and routine care to online vet consultations, Emergency Video Consults and home visits, making pet healthcare calmer and more convenient.",
		forProviders:
			"Stay Engaged with pet parents through a central platform, set reminders, push notifications regarding new outbreaks proactively, delivering medicines same day making care giving a convenient and connected service.",
		providerLabel: "For Veterinarians & Clinics",
	},
	{
		id: 3,
		name: "Grooming",
		isActive: true,
		image: "/images/grooming.png",
		description:
			"Uniting gentle groomers and caring families around stress‑free hygiene and wellbeing‑first practices. From Subscribing to regular grooming as a means of wellbeing to impromptu wellness treatments, the platform supports doorstep and at center services seamlessly.",
		forParents:
			"Discover trusted dog and cat grooming services near you, including home grooming and salon care, for hygienic, stress-free routines.",
		forProviders:
			"Reach pet parents through a Platform, that makes schedule management, creation of custom grooming packages, membership and Loyalty programs a click of the button convenience.",
		providerLabel: "For Groomers & Salons",
	},
	{
		id: 4,
		name: "Training",
		isActive: false,
		image: "/images/training.png",
		description:
			"Aligning pet parents and humane trainers to build confidence, communication, and trust. From finding the right trainers to engaging follow ups, the platform ensures a personal bond with the pet that lasts long!",
		forParents:
			"Discover Experienced trainers near you for obedience, socialisation, and skill-building that fits your pet's age, breed, and routine",
		forProviders:
			"Connect with pet parents through the Platform, offering teleconsultations, follow ups and tracking of progress a simple convenient mechanism to build credibility.",
		providerLabel: "For Trainers",
	},
	{
		id: 5,
		name: "Behaviour",
		isActive: true,
		image: "/images/behaviourist.png",
		description:
			"From early assessments to ongoing behavioural support, the platform connects pet parents and specialists to work together patiently and thoughtfully, ensuring pets are supported emotionally and understood while families feel guided.",
		forParents:
			"Discover Referenced behaviorists near you for expert support with anxiety, aggression, reactivity, and behavioural challenges.",
		forProviders:
			"Connect with pet parents through the Platform, offering teleconsultations, follow ups and tracking of progress a simple convenient mechanism to build credibility.",
		providerLabel: "For Behaviorists",
	},
	{
		id: 6,
		name: "Boarding",
		isActive: false,
		image: "/images/boarding.png",
		description:
			"Connecting families and care providers through safe, routine‑driven environments when being apart is unavoidable. From short stays to extended care, the platform ensures transparency, familiarity, hygienic environment and trust — so pets feel secure and parents feel reassured.",
		forParents:
			"Discover trusted and Referred pet boarding centres and foster homes near you, offering safe, supervised care when you're away — without disrupting your pet's comfort or routine.",
		forProviders:
			"Connect with pet parents through a platform, helping you focus on services while the platform ensures building your trust and credibility.",
		providerLabel: "For Boarding Centres",
	},
	{
		id: 7,
		name: "Nutrition",
		isActive: false,
		image: "/images/food.png",
		description:
			"Bringing together expert guidance and informed pet parents to make pet nutrition simple, safe, and health‑led. From daily diet planning to health‑led nutritional support, the platform helps pet parents move from dilemma to confidence with advice that evolves as their pet grows.",
		forParents:
			"Access pet nutritionists and customised diet plans near you, tailored to your pet's age, breed, health conditions, and lifestyle.",
		forProviders:
			"Connect with pet parents through a Platform, enabling personalised tele consultations, subscription plans, progress tracking and long-term care outcomes.",
		providerLabel: "For Pet Nutritionists",
	},
	{
		id: 8,
		name: "Resorts & Restaurants",
		isActive: true,
		image: "/images/cafe.png",
		description:
			"Enabling truly pet‑inclusive experiences by connecting families with pet-friendly places designed to welcome pets. From weekend getaways, special occasions to everyday outings, the platform helps parents include their companions in creating life's moments.",
		forParents:
			"Discover pet-friendly resorts and restaurants near you, where your pet is welcome, comfortable, and part of every outing or getaway.",
		forProviders:
			"Connect with pet parents through a platform, helping you showcase your space, policies, and hospitality with clarity.",
		providerLabel: "For Resorts & Restaurants",
	},
	{
		id: 9,
		name: "Products & Commerce",
		isActive: false,
		image: "/images/product.png",
		description:
			"Curating responsible products from ethical brands that follow sustainable practices into one trusted marketplace for everyday pet needs. From everyday essentials to thoughtful discoveries, the platform simplifies choices by bringing quality, safety, and purpose‑driven commerce together in one place.",
		forParents:
			"Discover & Shop trusted pet products online — from food, treats, and accessories to clothing — with a curated, in-store-like buying experience from home.",
		forProviders:
			"Reach pet parents through a platform, showcasing quality products and building new innovative products that are localized for community needs.",
		providerLabel: "For Pet Brands & Sellers",
	},
	{
		id: 10,
		name: "Sunset Services",
		isActive: true,
		image: "/images/sunset.png",
		description:
			"Supporting families and care professionals with dignity, clarity, and compassion during life's most difficult moments. From guidance to gentle aftercare, the platform ensures no family navigates goodbye alone, and every life is honoured with respect.",
		forParents:
			"Access respectful pet farewell and memorial services near you, offering compassionate support during goodbye moments with dignity and care.",
		forProviders:
			"Connect with Parents and offer thoughtful services at a time of need and grief and spread the word about the noble services rendered by you.",
		providerLabel: "For Service Providers",
	},
];
