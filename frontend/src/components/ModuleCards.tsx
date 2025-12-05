import React from 'react';
import { motion } from 'framer-motion';

// --- Types ---
interface ModuleData {
	id: number;
	title: string;
	desc: string;
	icon: React.ReactNode;
}

// --- Data ---
const modules: ModuleData[] = [
	{
		id: 1,
		title: 'Robotic Nervous System (ROS 2)',
		desc: 'Nodes, topics, services & real-time control',
		icon: (
			<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
				<path d="M24 8C24 8 12 16 12 24C12 32 24 40 24 40" stroke="var(--neon-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" />
				<path d="M24 8C24 8 36 16 36 24C36 32 24 40 24 40" stroke="var(--neon-magenta)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" />
				<circle cx="24" cy="8" r="3" stroke="var(--neon-cyan)" strokeWidth="1.5" fill="none" />
				<circle cx="12" cy="24" r="3" stroke="var(--neon-magenta)" strokeWidth="1.5" fill="none" />
				<circle cx="36" cy="24" r="3" stroke="var(--neon-magenta)" strokeWidth="1.5" fill="none" />
				<circle cx="24" cy="40" r="3" stroke="var(--neon-cyan)" strokeWidth="1.5" fill="none" />
				<circle cx="24" cy="24" r="2" fill="var(--neon-cyan)" />
				<path d="M24 11V37" stroke="var(--grid-line)" strokeWidth="1" />
				<path d="M15 24H33" stroke="var(--grid-line)" strokeWidth="1" />
			</svg>
		),
	},
	{
		id: 2,
		title: 'Digital Twin (Gazebo & Unity)',
		desc: 'Physics simulation & high-fidelity rendering',
		icon: (
			<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
				<path d="M24 4L8 12V36L24 44L40 36V12L24 4Z" stroke="var(--neon-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M8 12L24 20L40 12" stroke="var(--neon-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M24 44V20" stroke="var(--neon-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M4 40L44 40" stroke="var(--neon-magenta)" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M8 44L40 44" stroke="var(--neon-magenta)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
				<path d="M16 24L16 32" stroke="var(--neon-magenta)" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M32 24L32 32" stroke="var(--neon-magenta)" strokeWidth="1.5" strokeLinecap="round" />
			</svg>
		),
	},
	{
		id: 3,
		title: 'AI-Robot Brain (NVIDIA Isaac)',
		desc: 'Photorealistic sim, VSLAM & hardware acceleration',
		icon: (
			<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
				<path d="M12 24C12 14 16 8 24 8C32 8 36 14 36 24C36 34 32 40 24 40C16 40 12 34 12 24Z" stroke="var(--neon-cyan)" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M24 14V18" stroke="var(--neon-magenta)" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M24 30V34" stroke="var(--neon-magenta)" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M16 24H20" stroke="var(--neon-magenta)" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M28 24H32" stroke="var(--neon-magenta)" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M18 18L21 21" stroke="var(--neon-magenta)" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M27 27L30 30" stroke="var(--neon-magenta)" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M30 18L27 21" stroke="var(--neon-magenta)" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M21 27L18 30" stroke="var(--neon-magenta)" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M4 24H8" stroke="var(--neon-cyan)" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M40 24H44" stroke="var(--neon-cyan)" strokeWidth="1.5" strokeLinecap="round" />
			</svg>
		),
	},
	{
		id: 4,
		title: 'Vision-Language-Action',
		desc: 'Whisper voice commands + LLM-to-action pipeline',
		icon: (
			<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
				<path d="M8 12C8 9.79086 9.79086 8 12 8H28C30.2091 8 32 9.79086 32 12V24C32 26.2091 30.2091 28 28 28H16L8 36V12Z" stroke="var(--neon-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M14 18H26" stroke="var(--neon-cyan)" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M28 28L36 36L42 30" stroke="var(--neon-magenta)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M42 30L38 22" stroke="var(--neon-magenta)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<circle cx="42" cy="30" r="2" fill="var(--neon-magenta)" />
			</svg>
		),
	},
];

// --- Component ---
const ModuleCard: React.FC = () => {
	return (
		<section className="w-full py-12 px-4">
			{/* Section Header */}
			<div className="max-w-7xl mx-auto mb-12 text-center">
				<motion.h2
					className="text-4xl md:text-5xl font-bold mb-4"
					style={{ fontFamily: "'Inter', sans-serif" }}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-magenta)] to-[var(--neon-cyan)]">
						Core Learning Modules
					</span>
				</motion.h2>
				<motion.p
					className="text-gray-400 text-lg max-w-2xl mx-auto"
					style={{ fontFamily: "'Inter', sans-serif" }}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					Master the essential technologies powering modern humanoid robotics
				</motion.p>
			</div>

			{/* Cards Grid */}
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{modules.map((module, index) => (
					<motion.div
						key={module.id}
						className="group relative flex flex-col items-start p-8 text-left rounded-2xl overflow-hidden cursor-pointer"
						style={{
							backgroundColor: 'rgba(11, 12, 16, 0.8)',
							backdropFilter: 'blur(20px)',
							border: '1px solid var(--grid-line)',
							boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
						}}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						whileHover={{
							y: -12,
							scale: 1.02,
							borderColor: 'var(--neon-cyan)',
							boxShadow: '0 25px 50px -12px rgba(0, 242, 255, 0.25)',
							transition: { type: 'spring', stiffness: 400, damping: 25 },
						}}
						whileTap={{ scale: 0.98 }}
						role="button"
						tabIndex={0}
						aria-label={`View details for ${module.title}`}
					>
						{/* Module Number Badge */}
						<div
							className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
							style={{
								background: 'linear-gradient(135deg, rgba(0, 242, 255, 0.2), rgba(255, 0, 255, 0.2))',
								border: '1px solid var(--neon-cyan)',
								color: 'var(--neon-cyan)',
								fontFamily: "'Inter', sans-serif",
							}}
						>
							{module.id}
						</div>

						{/* Icon Container */}
						<motion.div
							className="mb-6 text-[var(--neon-cyan)] group-hover:text-[var(--neon-magenta)] transition-colors duration-500"
							whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
						>
							{module.icon}
						</motion.div>

						{/* Title */}
						<h3
							className="mb-3 text-xl font-bold tracking-tight leading-tight"
							style={{ fontFamily: "'Inter', sans-serif" }}
						>
							<span className="bg-clip-text text-transparent bg-gradient-to-br from-[var(--neon-cyan)] via-white to-[var(--neon-magenta)] group-hover:from-[var(--neon-magenta)] group-hover:to-[var(--neon-cyan)] transition-all duration-500">
								{module.title}
							</span>
						</h3>

						{/* Description */}
						<p
							className="text-sm text-gray-400 group-hover:text-gray-300 font-normal leading-relaxed transition-colors duration-300"
							style={{ fontFamily: "'Inter', sans-serif" }}
						>
							{module.desc}
						</p>

						{/* Explore Arrow */}
						<motion.div
							className="mt-6 flex items-center gap-2 text-[var(--neon-cyan)] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							style={{ fontFamily: "'Inter', sans-serif" }}
						>
							<span>Explore Module</span>
							<motion.svg
								className="w-4 h-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								animate={{ x: [0, 4, 0] }}
								transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</motion.svg>
						</motion.div>

						{/* Gradient Overlay */}
						<div
							className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
							style={{
								background: 'radial-gradient(circle at 50% 0%, rgba(0, 242, 255, 0.08) 0%, transparent 60%)',
							}}
						/>

						{/* Border Glow Effect */}
						<div
							className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
							style={{
								boxShadow: 'inset 0 0 20px rgba(0, 242, 255, 0.1)',
							}}
						/>

						{/* Corner Accent */}
						<div
							className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
							style={{
								background: 'radial-gradient(circle at bottom right, rgba(255, 0, 255, 0.15) 0%, transparent 70%)',
							}}
						/>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default ModuleCard;
