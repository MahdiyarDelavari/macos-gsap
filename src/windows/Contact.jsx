import WindowControls from "@components/WindowControls";
import { socials } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import { Mail } from "lucide-react";
import React from "react";

const Contact = () => {
	return (
		<>
			<div id="window-header">
				<WindowControls target="contact" />
				<h2>Contact Me</h2>
			</div>
			<div className="p-5 space-y-5">
				<img
					src="/images/tardis.png"
					alt="Contact"
					className="w-20 rounded-full"
				/>

				<h3>Let's Connect</h3>
				<p>
					Got an Idea? A Bug To Squash? Or Just Wanna Talk Tech? I'm All Ears!
				</p>

				<ul>
					{socials.map(({ id, bg, text, link, icon }) => (
						<li key={id} style={{ backgroundColor: bg }}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
								<>
									{icon !== "email" ? <img src={icon} alt={text} className="size-5" /> : <Mail className="size-5 text-white"/>}
									<p>{text}</p>
								</>
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
