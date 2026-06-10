// ─── Mock Data for StoneBeam-NH ───

export const ROLES = ['Builder', 'Dealer', 'Client', 'Contractor', 'Labourer', 'Skilled Labourer'];

export const LOCATIONS = [
  'Ahmedabad, Gujarat', 'Surat, Gujarat', 'Vadodara, Gujarat', 'Rajkot, Gujarat',
  'Gandhinagar, Gujarat', 'Bhavnagar, Gujarat', 'Jamnagar, Gujarat', 'Junagadh, Gujarat',
  'Anand, Gujarat', 'Nadiad, Gujarat', 'Mumbai, Maharashtra', 'Pune, Maharashtra',
];

export const PROJECT_TYPES = [
  'Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Renovation', 'Interior Design',
];

export const MATERIALS = [
  'Portland Cement (OPC)', 'Portland Pozzolana Cement (PPC)', 'Sand (River)', 'Fine Aggregate',
  'Coarse Aggregate', 'Crushed Stone', 'Concrete (Ready Mix)', 'AAC Blocks', 'Clay Bricks',
  'Reinforcement Bars (TMT)', 'Structural Steel (I-beam)', 'Plywood', 'Glass (Tempered)',
  'Paint (Emulsion)', 'Tiles (Ceramic)', 'Tiles (Vitrified)', 'Natural Stone (Marble)',
  'Water Pipes (PVC)', 'Electrical Cables (Power)', 'Lighting Fixtures',
];

export const SPECIALIZATIONS = [
  'Residential Construction', 'Commercial Projects', 'Interior Design', 'Structural Engineering',
  'Plumbing', 'Electrical', 'HVAC', 'Landscaping', 'Renovation', 'Road Construction',
  'Bridge Construction', 'Waterproofing', 'Painting', 'Tiling', 'Carpentry',
];

export const mockUsers = [
  { id: 'u1', name: 'Rajesh Patel', role: 'Builder', email: 'rajesh@stonebeam.com', phone: '+91-9876543210', location: 'Ahmedabad, Gujarat', company: 'Patel Constructions', rating: 4.8, reviews: 127, experience: '15 years', specializations: ['Residential Construction', 'Commercial Projects'], bio: 'Leading construction firm in Gujarat with 15+ years of experience.', avatar: null, verified: true, projectsCompleted: 89 },
  { id: 'u2', name: 'Amit Shah', role: 'Builder', email: 'amit@build.com', phone: '+91-9876543211', location: 'Surat, Gujarat', company: 'Shah Builders', rating: 4.5, reviews: 98, experience: '12 years', specializations: ['Commercial Projects', 'Interior Design'], bio: 'Quality construction at affordable prices.', avatar: null, verified: true, projectsCompleted: 67 },
  { id: 'u3', name: 'Priya Mehta', role: 'Dealer', email: 'priya@dealers.com', phone: '+91-9876543212', location: 'Vadodara, Gujarat', company: 'Mehta Materials', rating: 4.9, reviews: 213, experience: '20 years', specializations: ['Cement & Aggregates', 'Steel & Iron'], bio: 'Largest material supplier in Central Gujarat.', avatar: null, verified: true, projectsCompleted: 0 },
  { id: 'u4', name: 'Vikram Singh', role: 'Dealer', email: 'vikram@supply.com', phone: '+91-9876543213', location: 'Rajkot, Gujarat', company: 'Singh Supplies', rating: 4.3, reviews: 76, experience: '8 years', specializations: ['Wooden Materials', 'Paints & Finishes'], bio: 'Premium quality building materials.', avatar: null, verified: true, projectsCompleted: 0 },
  { id: 'u5', name: 'Neha Sharma', role: 'Client', email: 'neha@gmail.com', phone: '+91-9876543214', location: 'Gandhinagar, Gujarat', company: '', rating: 4.7, reviews: 15, experience: '', specializations: [], bio: 'Looking for reliable builders for my dream home.', avatar: null, verified: true, projectsCompleted: 3 },
  { id: 'u6', name: 'Arjun Desai', role: 'Contractor', email: 'arjun@contract.com', phone: '+91-9876543215', location: 'Ahmedabad, Gujarat', company: 'Desai Contractors', rating: 4.6, reviews: 156, experience: '18 years', specializations: ['Structural Engineering', 'Road Construction'], bio: 'Experienced contractor for large-scale projects.', avatar: null, verified: true, projectsCompleted: 145 },
  { id: 'u7', name: 'Kiran Joshi', role: 'Contractor', email: 'kiran@build.com', phone: '+91-9876543216', location: 'Surat, Gujarat', company: 'Joshi & Co.', rating: 4.4, reviews: 89, experience: '10 years', specializations: ['Interior Design', 'Renovation'], bio: 'Specializing in interior fit-outs.', avatar: null, verified: true, projectsCompleted: 78 },
  { id: 'u8', name: 'Mahesh Kumar', role: 'Labourer', email: 'mahesh@work.com', phone: '+91-9876543217', location: 'Bhavnagar, Gujarat', company: '', rating: 4.2, reviews: 34, experience: '5 years', specializations: ['General Labour', 'Masonry'], bio: 'Hardworking and reliable.', avatar: null, verified: true, projectsCompleted: 0 },
  { id: 'u9', name: 'Suresh Yadav', role: 'Skilled Labourer', email: 'suresh@work.com', phone: '+91-9876543218', location: 'Jamnagar, Gujarat', company: '', rating: 4.8, reviews: 67, experience: '12 years', specializations: ['Plumbing', 'Electrical'], bio: 'Certified plumber and electrician.', avatar: null, verified: true, projectsCompleted: 0 },
  { id: 'u10', name: 'Ramesh Prajapati', role: 'Skilled Labourer', email: 'ramesh@work.com', phone: '+91-9876543219', location: 'Anand, Gujarat', company: '', rating: 4.5, reviews: 45, experience: '8 years', specializations: ['Painting', 'Tiling'], bio: 'Expert painter and tile setter.', avatar: null, verified: true, projectsCompleted: 0 },
  { id: 'u11', name: 'Deepak Verma', role: 'Builder', email: 'deepak@build.com', phone: '+91-9876543220', location: 'Mumbai, Maharashtra', company: 'Verma Constructions', rating: 4.7, reviews: 189, experience: '20 years', specializations: ['Commercial Projects', 'Infrastructure'], bio: 'Large-scale project specialists.', avatar: null, verified: true, projectsCompleted: 120 },
  { id: 'u12', name: 'Ravi Contractor', role: 'Contractor', email: 'ravi@contract.com', phone: '+91-9876543221', location: 'Pune, Maharashtra', company: 'Ravi Works', rating: 4.3, reviews: 62, experience: '7 years', specializations: ['Waterproofing', 'Landscaping'], bio: 'Specialist in waterproofing solutions.', avatar: null, verified: false, projectsCompleted: 43 },
  { id: 'u13', name: 'Anita Devi', role: 'Dealer', email: 'anita@supply.com', phone: '+91-9876543222', location: 'Junagadh, Gujarat', company: 'Anita Traders', rating: 4.6, reviews: 91, experience: '14 years', specializations: ['Electrical Supplies', 'Plumbing Materials'], bio: 'One-stop shop for all electrical and plumbing needs.', avatar: null, verified: true, projectsCompleted: 0 },
  { id: 'u14', name: 'Gopal Thakur', role: 'Labourer', email: 'gopal@work.com', phone: '+91-9876543223', location: 'Nadiad, Gujarat', company: '', rating: 4.0, reviews: 22, experience: '3 years', specializations: ['General Labour'], bio: 'Dedicated worker.', avatar: null, verified: true, projectsCompleted: 0 },
  { id: 'u15', name: 'Fatima Sheikh', role: 'Client', email: 'fatima@email.com', phone: '+91-9876543224', location: 'Ahmedabad, Gujarat', company: 'Sheikh Enterprises', rating: 4.9, reviews: 8, experience: '', specializations: [], bio: 'Building our new corporate office.', avatar: null, verified: true, projectsCompleted: 1 },
];

export const mockProjects = [
  { id: 'p1', title: 'Luxury Villa Construction', description: 'A 4BHK luxury villa with modern amenities, swimming pool, and landscaped garden in the heart of Ahmedabad.', budget: '₹2.5 Cr', budgetNum: 25000000, location: 'Ahmedabad, Gujarat', type: 'Residential', status: 'In Progress', createdBy: 'u5', assignedTo: 'u1', startDate: '2025-03-01', endDate: '2026-09-30', progress: 45, materials: ['Portland Cement (OPC)', 'Reinforcement Bars (TMT)', 'Clay Bricks'] },
  { id: 'p2', title: 'Corporate Office Complex', description: '12-story commercial office building with modern infrastructure and green building certification.', budget: '₹15 Cr', budgetNum: 150000000, location: 'Gandhinagar, Gujarat', type: 'Commercial', status: 'Planning', createdBy: 'u15', assignedTo: 'u11', startDate: '2025-06-01', endDate: '2027-12-31', progress: 10, materials: ['Structural Steel (I-beam)', 'Glass (Tempered)', 'Concrete (Ready Mix)'] },
  { id: 'p3', title: 'Highway Overpass Bridge', description: 'Construction of a 500-meter overpass bridge connecting NH-48 and SG Highway.', budget: '₹45 Cr', budgetNum: 450000000, location: 'Surat, Gujarat', type: 'Infrastructure', status: 'In Progress', createdBy: 'u15', assignedTo: 'u6', startDate: '2025-01-15', endDate: '2027-01-15', progress: 30, materials: ['Concrete (Ready Mix)', 'Reinforcement Bars (TMT)', 'Structural Steel (I-beam)'] },
  { id: 'p4', title: 'Apartment Renovation - 3BHK', description: 'Complete interior renovation of a 3BHK apartment including kitchen, bathrooms, and living areas.', budget: '₹18 L', budgetNum: 1800000, location: 'Vadodara, Gujarat', type: 'Renovation', status: 'Completed', createdBy: 'u5', assignedTo: 'u7', startDate: '2024-11-01', endDate: '2025-02-28', progress: 100, materials: ['Tiles (Vitrified)', 'Paint (Emulsion)', 'Plywood'] },
  { id: 'p5', title: 'Factory Warehouse Setup', description: 'Industrial warehouse with 50,000 sq ft area, loading docks, and fire safety systems.', budget: '₹8 Cr', budgetNum: 80000000, location: 'Rajkot, Gujarat', type: 'Industrial', status: 'In Progress', createdBy: 'u15', assignedTo: 'u2', startDate: '2025-02-01', endDate: '2026-08-31', progress: 55, materials: ['Structural Steel (I-beam)', 'Concrete (Ready Mix)', 'Coarse Aggregate'] },
  { id: 'p6', title: 'Modern Kitchen Interior', description: 'Premium modular kitchen design and installation with Italian countertops.', budget: '₹12 L', budgetNum: 1200000, location: 'Ahmedabad, Gujarat', type: 'Interior Design', status: 'Planning', createdBy: 'u5', assignedTo: null, startDate: '2025-07-01', endDate: '2025-09-30', progress: 0, materials: ['Natural Stone (Marble)', 'Plywood', 'Lighting Fixtures'] },
  { id: 'p7', title: 'Shopping Mall Phase 2', description: 'Expansion of existing shopping mall with 200 new retail spaces and food court.', budget: '₹120 Cr', budgetNum: 1200000000, location: 'Surat, Gujarat', type: 'Commercial', status: 'In Progress', createdBy: 'u15', assignedTo: 'u11', startDate: '2024-06-01', endDate: '2026-12-31', progress: 65, materials: ['Glass (Tempered)', 'Structural Steel (I-beam)', 'Tiles (Vitrified)'] },
  { id: 'p8', title: 'Residential Township', description: '200-unit township with parks, club house, and community center.', budget: '₹85 Cr', budgetNum: 850000000, location: 'Gandhinagar, Gujarat', type: 'Residential', status: 'Planning', createdBy: 'u15', assignedTo: 'u1', startDate: '2025-09-01', endDate: '2028-09-01', progress: 5, materials: ['Portland Cement (OPC)', 'AAC Blocks', 'Reinforcement Bars (TMT)'] },
];

export const mockOrders = [
  { id: 'o1', projectId: 'p1', materials: [{ name: 'Portland Cement (OPC)', qty: 500, unit: 'bag' }, { name: 'Reinforcement Bars (TMT)', qty: 20, unit: 'ton' }], status: 'Delivered', dealer: 'u3', orderedBy: 'u1', orderDate: '2025-03-10', deliveryDate: '2025-03-18', total: '₹4,50,000', address: '12, Builder Colony, Satellite Road, Ahmedabad' },
  { id: 'o2', projectId: 'p1', materials: [{ name: 'Clay Bricks', qty: 10000, unit: 'nos' }], status: 'In Transit', dealer: 'u4', orderedBy: 'u1', orderDate: '2025-04-01', deliveryDate: '2025-04-08', total: '₹1,20,000', address: '12, Builder Colony, Satellite Road, Ahmedabad' },
  { id: 'o3', projectId: 'p3', materials: [{ name: 'Concrete (Ready Mix)', qty: 200, unit: 'm3' }, { name: 'Structural Steel (I-beam)', qty: 50, unit: 'ton' }], status: 'Processing', dealer: 'u3', orderedBy: 'u6', orderDate: '2025-04-02', deliveryDate: null, total: '₹25,00,000', address: 'NH-48 Site Office, Surat' },
  { id: 'o4', projectId: 'p5', materials: [{ name: 'Coarse Aggregate', qty: 100, unit: 'm3' }], status: 'Pending', dealer: 'u13', orderedBy: 'u2', orderDate: '2025-04-03', deliveryDate: null, total: '₹3,50,000', address: 'Industrial Area, Phase 2, Rajkot' },
  { id: 'o5', projectId: 'p4', materials: [{ name: 'Tiles (Vitrified)', qty: 500, unit: 'sqm' }, { name: 'Paint (Emulsion)', qty: 100, unit: 'ltr' }], status: 'Delivered', dealer: 'u4', orderedBy: 'u7', orderDate: '2025-01-15', deliveryDate: '2025-01-22', total: '₹2,80,000', address: 'Flat 402, Harmony Tower, Vadodara' },
  { id: 'o6', projectId: 'p7', materials: [{ name: 'Glass (Tempered)', qty: 200, unit: 'sqm' }], status: 'Delivered', dealer: 'u3', orderedBy: 'u11', orderDate: '2025-02-20', deliveryDate: '2025-03-02', total: '₹12,00,000', address: 'Mall Site, Ring Road, Surat' },
];

export const mockJobs = [
  { id: 'j1', title: 'Senior Project Manager', department: 'Operations', location: 'Ahmedabad, Gujarat', type: 'Full-time', salary: '₹15-20 LPA', posted: '2025-03-20', description: 'Lead and manage large-scale construction projects from planning to completion.', requirements: ['10+ years experience in construction management', 'PMP certification preferred', 'Excellent leadership and communication skills'] },
  { id: 'j2', title: 'Frontend Developer', department: 'Technology', location: 'Remote', type: 'Full-time', salary: '₹8-12 LPA', posted: '2025-03-25', description: 'Build and maintain our web platform using React and modern web technologies.', requirements: ['3+ years React experience', 'Proficiency in JavaScript/TypeScript', 'Experience with REST APIs'] },
  { id: 'j3', title: 'Business Development Executive', department: 'Sales', location: 'Surat, Gujarat', type: 'Full-time', salary: '₹6-10 LPA', posted: '2025-04-01', description: 'Drive business growth by acquiring new clients and partnerships in the construction sector.', requirements: ['2+ years in B2B sales', 'Knowledge of construction industry', 'Strong negotiation skills'] },
  { id: 'j4', title: 'Quality Assurance Engineer', department: 'Engineering', location: 'Ahmedabad, Gujarat', type: 'Full-time', salary: '₹5-8 LPA', posted: '2025-04-02', description: 'Ensure platform quality through comprehensive testing and automation.', requirements: ['2+ years QA experience', 'Experience with test automation', 'Knowledge of CI/CD pipelines'] },
  { id: 'j5', title: 'Content Writer', department: 'Marketing', location: 'Remote', type: 'Part-time', salary: '₹3-5 LPA', posted: '2025-04-03', description: 'Create engaging content about construction industry trends and company updates.', requirements: ['Excellent writing skills', 'Knowledge of SEO', 'Construction industry knowledge a plus'] },
  { id: 'j6', title: 'Site Supervisor', department: 'Operations', location: 'Vadodara, Gujarat', type: 'Full-time', salary: '₹4-6 LPA', posted: '2025-03-28', description: 'Supervise construction sites and ensure adherence to safety and quality standards.', requirements: ['5+ years on-site experience', 'Diploma in Civil Engineering', 'Safety certification required'] },
];

export const mockGuides = [
  { id: 'g1', title: 'Complete Guide to Choosing the Right Cement', category: 'Materials', readTime: '8 min', description: 'Learn the differences between OPC, PPC, and specialty cements for your project needs.', content: 'Understanding cement types is crucial for any construction project. OPC (Ordinary Portland Cement) is ideal for general construction, while PPC (Portland Pozzolana Cement) offers better durability and is eco-friendly...' },
  { id: 'g2', title: 'How to Calculate Material Quantities', category: 'Planning', readTime: '12 min', description: 'Step-by-step guide to estimating materials for residential construction projects.', content: 'Accurate material estimation prevents cost overruns and delays...' },
  { id: 'g3', title: 'Understanding Construction Contracts', category: 'Legal', readTime: '15 min', description: 'Essential clauses and terms every builder and client should know before signing.', content: 'A well-drafted construction contract protects both parties...' },
  { id: 'g4', title: 'Safety Standards on Construction Sites', category: 'Safety', readTime: '10 min', description: 'Comprehensive safety protocols and best practices for construction workers.', content: 'Safety on construction sites is paramount. All workers must wear PPE...' },
  { id: 'g5', title: 'Green Building Certification Guide', category: 'Sustainability', readTime: '14 min', description: 'How to achieve IGBC and GRIHA certification for your building projects.', content: 'Green building certifications demonstrate environmental responsibility...' },
  { id: 'g6', title: 'Waterproofing Techniques for Modern Buildings', category: 'Techniques', readTime: '11 min', description: 'Explore various waterproofing methods to protect your structure from water damage.', content: 'Effective waterproofing is essential for the longevity of any structure...' },
];

export const mockBlogPosts = [
  { id: 'b1', title: 'How Digital Quotations Are Revolutionizing Construction', category: 'Technology', author: 'StoneBeam Team', date: 'Jan 15, 2025', readTime: '5 min', excerpt: 'Discover how our digital quotation system is streamlining the construction bidding process and reducing project delays by up to 40%.', views: 1200, likes: 89, comments: 23 },
  { id: 'b2', title: 'AI in Construction: The Future is Here', category: 'Technology', author: 'Dr. Ankit Patel', date: 'Feb 8, 2025', readTime: '7 min', excerpt: 'Artificial intelligence is transforming how we plan, build, and manage construction projects. Learn about the latest AI applications.', views: 2100, likes: 156, comments: 45 },
  { id: 'b3', title: 'Premium ROI: Why Quality Materials Matter', category: 'Tips & Tricks', author: 'Priya Mehta', date: 'Mar 1, 2025', readTime: '4 min', excerpt: 'Investing in premium building materials may cost more upfront but delivers significant returns in durability and value.', views: 1500, likes: 112, comments: 31 },
  { id: 'b4', title: 'Top 10 Safety Practices Every Worker Must Know', category: 'Safety', author: 'Safety First Team', date: 'Mar 15, 2025', readTime: '6 min', excerpt: 'Construction safety is non-negotiable. Here are the top 10 practices that can save lives on site.', views: 3200, likes: 234, comments: 67 },
  { id: 'b5', title: 'Managing Large-Scale Projects with StoneBeam', category: 'Management', author: 'StoneBeam Team', date: 'Apr 1, 2025', readTime: '8 min', excerpt: 'A comprehensive guide to using StoneBeam-NH for managing projects worth crores with multiple stakeholders.', views: 890, likes: 45, comments: 12 },
];

export const mockFAQs = [
  { id: 'f1', question: 'How do I register on StoneBeam-NH?', answer: 'Click on the Sign Up button, fill in your details, select your role (Builder, Client, Contractor, etc.), and verify your email. Your profile will be reviewed within 24 hours.' },
  { id: 'f2', question: 'How does the verification process work?', answer: 'We verify all professionals through document checks, reference verification, and background screening. This ensures only authentic and reliable users on our platform.' },
  { id: 'f3', question: 'How can I post a project?', answer: 'After logging in, go to your dashboard and click "Create Project". Fill in the project details including description, budget, timeline, and required materials. Your project will be visible to relevant professionals.' },
  { id: 'f4', question: 'Is there a fee for using StoneBeam-NH?', answer: 'Basic registration and browsing is free. We charge a small commission on successful project connections. Premium features are available through subscription plans.' },
  { id: 'f5', question: 'How do I track my order status?', answer: 'Go to the "Order Status" section in your dashboard. You can see real-time updates on all your material orders including processing, shipping, and delivery status.' },
  { id: 'f6', question: 'What if I have a dispute with a contractor?', answer: 'Contact our Customer Care team. We provide mediation services and have a dispute resolution process to ensure fair outcomes for both parties.' },
  { id: 'f7', question: 'Can I cancel a project after posting?', answer: 'Yes, you can cancel a project before any contractor has been assigned. Once work has begun, cancellation terms apply as per the agreement.' },
  { id: 'f8', question: 'How do I contact customer support?', answer: 'You can reach us via email at stonebeamnh@gmail.com, call us at +91-7043297992, or use the Customer Care section in your dashboard.' },
];

export const mockPressReleases = [
  { id: 'pr1', title: 'StoneBeam-NH Launches Digital Construction Platform in Gujarat', date: 'January 10, 2025', source: 'Business Standard', excerpt: 'StoneBeam-NH, a new digital platform connecting construction professionals, officially launches in Ahmedabad, aiming to transform the construction industry.' },
  { id: 'pr2', title: 'StoneBeam-NH Partners with Gujarat Builders Association', date: 'February 15, 2025', source: 'The Economic Times', excerpt: 'In a landmark partnership, StoneBeam-NH joins forces with the Gujarat Builders Association to bring digital transformation to 5000+ construction firms.' },
  { id: 'pr3', title: 'StoneBeam-NH Achieves 98% Client Satisfaction Rate', date: 'March 5, 2025', source: 'Construction Week', excerpt: 'The platform reports exceptional user satisfaction driven by verified profiles and transparent pricing mechanisms.' },
  { id: 'pr4', title: 'StoneBeam-NH Expands Operations to Maharashtra', date: 'March 28, 2025', source: 'Mint', excerpt: 'Following rapid growth in Gujarat, StoneBeam-NH announces expansion to Mumbai and Pune markets.' },
];

export const mockAttendance = [
  { date: '2025-04-01', checkIn: '08:00 AM', checkOut: '05:30 PM', hours: 9.5, status: 'Present' },
  { date: '2025-04-02', checkIn: '08:15 AM', checkOut: '06:00 PM', hours: 9.75, status: 'Present' },
  { date: '2025-04-03', checkIn: null, checkOut: null, hours: 0, status: 'Absent' },
  { date: '2025-04-04', checkIn: '07:45 AM', checkOut: '04:30 PM', hours: 8.75, status: 'Present' },
  { date: '2025-04-05', checkIn: '08:00 AM', checkOut: '05:00 PM', hours: 9, status: 'Present' },
  { date: '2025-04-06', checkIn: null, checkOut: null, hours: 0, status: 'Weekend' },
  { date: '2025-04-07', checkIn: null, checkOut: null, hours: 0, status: 'Weekend' },
];

export const mockWorkStatus = [
  { id: 'w1', date: '2025-04-04', task: 'Foundation excavation - Block C', site: 'Luxury Villa, Ahmedabad', hoursWorked: 8, status: 'Completed', supervisor: 'Arjun Desai' },
  { id: 'w2', date: '2025-04-03', task: 'Rebar tying - Ground floor', site: 'Corporate Office, Gandhinagar', hoursWorked: 9, status: 'Completed', supervisor: 'Kiran Joshi' },
  { id: 'w3', date: '2025-04-02', task: 'Concrete pouring - Slab Level 2', site: 'Shopping Mall, Surat', hoursWorked: 10, status: 'Completed', supervisor: 'Arjun Desai' },
  { id: 'w4', date: '2025-04-01', task: 'Brick masonry - Partition walls', site: 'Luxury Villa, Ahmedabad', hoursWorked: 8.5, status: 'Completed', supervisor: 'Rajesh Patel' },
];

// Helper to generate initials avatar color
export const getAvatarColor = (name) => {
  const colors = ['#7b2cbf', '#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#e67e22'];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
};

export const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
};
