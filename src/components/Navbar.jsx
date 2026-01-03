import React from "react";

import { navIcons, navLinks } from "@constants";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const Navbar = () => {

	const [currentTime, setCurrentTime] = useState(dayjs());
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(dayjs());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="Logo" />
                <p className="font-bold">Mahdiyar's Portfolio</p>

                <ul>
                    {navLinks.map((item) => (
                        <li key={item.id} className="cursor-pointer">
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map((icon) => (
                        <li key={icon.id} className="cursor-pointer">
                            <img
                                className="p-1 hover:bg-gray-200 rounded hover:cursor-default"
                                src={icon.img}
                                alt={icon.alt}
                            />
                        </li>
                    ))}
                </ul>

                <time>{currentTime.format("ddd MMM D HH:mm:ss A")}</time>
            </div>
        </nav>
    );
};

export default Navbar;
