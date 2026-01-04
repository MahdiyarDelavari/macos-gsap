import { useGSAP } from "@gsap/react";
import useWindowStore from "@store/window";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import React, { useLayoutEffect } from "react";

const WindowWrapper = (Component, WindowKey) => {
	const Wrapped = (props) => {
		const { focusWindow, windows } = useWindowStore();
		const { isOpen, zIndex } = windows[WindowKey];
		const ref = React.useRef(null);

		useGSAP(() => {
			const el = ref.current;
			if (!el || !isOpen) return;
			el.style.display = "block";

			gsap.fromTo(
				el,
				{
					opacity: 0,
					y: 40,
					scale: 0.7,
				},
				{
					scale: 1,
					y: 0,
					opacity: 1,
					duration: 0.5,
					ease: "power3.out",
				}
			);
		}, [isOpen]);

		useGSAP(() => {
			const el = ref.current;
			if (!el) return;

			const header = el.querySelector("#window-header");
			if (!header) {
				console.error(
					`Header element with class 'header' not found in ${WindowKey}`
				);
				return;
			}

			const [instance] = Draggable.create(el, {
				bounds: "main",
				handle: header,
				onPress() {
					focusWindow(WindowKey);
				},
			});
			return () => {
				instance.kill();
			};
		}, []);

		useLayoutEffect(() => {
			const el = ref.current;
			if (!el) return;
			el.style.display = isOpen ? "block" : "none";
		}, [isOpen]);

		return (
			<section id={WindowKey} ref={ref} style={{ zIndex }} className="absolute">
				<Component {...props} />
			</section>
		);
	};

	Wrapped.displayName = `WindowWrapper(${
		Component.displayName || Component.name || "Component"
	})`;

	return Wrapped;
};

export default WindowWrapper;
