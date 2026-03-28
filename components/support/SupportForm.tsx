"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const SupportForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<{
		type: "success" | "error" | null;
		message: string;
	}>({ type: null, message: "" });
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		userType: "",
		query: "",
	});

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!formData.fullName || !formData.email || !formData.query) {
			setSubmitStatus({
				type: "error",
				message: "Please fill in all required fields.",
			});
			return;
		}

		setIsSubmitting(true);
		setSubmitStatus({ type: null, message: "" });

		try {
			const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
			const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
			const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

			if (!serviceId || !templateId || !publicKey) {
				throw new Error(
					`Missing EmailJS configuration. Please restart dev server. Missing: ${
						!serviceId ? "SERVICE_ID " : ""
					}${!templateId ? "TEMPLATE_ID " : ""}${!publicKey ? "PUBLIC_KEY" : ""}`,
				);
			}

			const templateParams = {
				from_name: "Warmpawz Platform",
				from_email: "platform@warmpawz.com",
				phone: formData.phone || "Not provided",
				user_type: formData.userType || "Not specified",
				message: `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nUser Type: ${formData.userType || "Not specified"}\n\nMessage:\n${formData.query}`,
				to_email: "vikrambellurv@gmail.com",
			};

			const result = await emailjs.send(
				serviceId,
				templateId,
				templateParams,
				publicKey,
			);

			if (result.status === 200) {
				setSubmitStatus({
					type: "success",
					message: "Thank you! Your message has been sent successfully.",
				});

				setFormData({
					fullName: "",
					email: "",
					phone: "",
					userType: "",
					query: "",
				});
			}
		} catch (error: unknown) {
			let errorMessage =
				"Failed to send message. Please try again or email us directly at contact@warmpawz.com";

			if (
				typeof error === "object" &&
				error !== null &&
				"text" in error &&
				typeof (error as { text: unknown }).text === "string"
			) {
				errorMessage = `Error: ${(error as { text: string }).text}. Please contact us at contact@warmpawz.com`;
			}

			setSubmitStatus({
				type: "error",
				message: errorMessage,
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto">
			{/* Header */}
			<div className="flex items-center justify-center p-6 border-b border-gray-200">
				<h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
			</div>

			{/* Body */}
			<div className="p-6">
				<p className="text-sm text-gray-600 mb-6 leading-relaxed">
					Have questions or need support? We&apos;re here to help you and your
					furry friends.
				</p>

				<form onSubmit={handleSubmit} className="space-y-4">
					{/* Status Message */}
					{submitStatus.type && (
						<div
							className={`p-4 rounded-lg text-sm ${
								submitStatus.type === "success"
									? "bg-green-50 text-green-800 border border-green-200"
									: "bg-red-50 text-red-800 border border-red-200"
							}`}
						>
							{submitStatus.message}
						</div>
					)}

					<div>
						<label
							htmlFor="supportFullName"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Full Name <span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							id="supportFullName"
							name="fullName"
							value={formData.fullName}
							onChange={handleInputChange}
							placeholder="Ex: Sparky Singh"
							required
							disabled={isSubmitting}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f69052] focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
							style={{ minHeight: "48px" }}
						/>
					</div>

					<div>
						<label
							htmlFor="supportEmail"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Email Address <span className="text-red-500">*</span>
						</label>
						<input
							type="email"
							id="supportEmail"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							placeholder="Sparky@gmail.com"
							required
							disabled={isSubmitting}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f69052] focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
							style={{ minHeight: "48px" }}
						/>
					</div>

					<div>
						<label
							htmlFor="supportPhone"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Phone Number
						</label>
						<input
							type="tel"
							id="supportPhone"
							name="phone"
							value={formData.phone}
							onChange={handleInputChange}
							placeholder="+91 9876 54321"
							disabled={isSubmitting}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f69052] focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
							style={{ minHeight: "48px" }}
						/>
					</div>

					<div>
						<label
							htmlFor="supportUserType"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Choose User
						</label>
						<select
							id="supportUserType"
							name="userType"
							value={formData.userType}
							onChange={handleInputChange}
							disabled={isSubmitting}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f69052] focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
							style={{ minHeight: "48px" }}
						>
							<option value="">Select user type</option>
							<option value="pet-parent">Pet Parent</option>
							<option value="service-provider">Service Provider</option>
						</select>
					</div>

					<div>
						<label
							htmlFor="supportQuery"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Query <span className="text-red-500">*</span>
						</label>
						<textarea
							id="supportQuery"
							name="query"
							value={formData.query}
							onChange={handleInputChange}
							placeholder="Type your query"
							rows={3}
							required
							disabled={isSubmitting}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f69052] focus:border-transparent resize-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
							style={{ minHeight: "80px" }}
						/>
					</div>

					{/* Footer */}
					<div className="flex gap-3 pt-4">
						<button
							type="submit"
							disabled={isSubmitting}
							className="flex-1 bg-[#f69052] text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-[#E09642] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f69052] focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed"
							style={{ minHeight: "48px" }}
						>
							{isSubmitting ? "Sending..." : "Submit"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SupportForm;
