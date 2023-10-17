/* generated by Svelte v4.2.1 */
import {
	SvelteComponent,
	append_hydration,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	get_svelte_dataset,
	init,
	insert_hydration,
	listen,
	noop,
	run_all,
	safe_not_equal,
	set_data,
	space,
	text
} from "./svelte/internal/index.js";

import "./svelte/internal/disclose-version/index.js";

function create_fragment(ctx) {
	let button0;
	let textContent = "Decrement";
	let t1;
	let div;
	let t2;
	let t3;
	let button1;
	let textContent_1 = "Increment";
	let mounted;
	let dispose;

	return {
		c() {
			button0 = element("button");
			button0.textContent = textContent;
			t1 = space();
			div = element("div");
			t2 = text(/*counter*/ ctx[0]);
			t3 = space();
			button1 = element("button");
			button1.textContent = textContent_1;
		},
		l(nodes) {
			button0 = claim_element(nodes, "BUTTON", { ["data-svelte-h"]: true });
			if (get_svelte_dataset(button0) !== "svelte-143b0s") button0.textContent = textContent;
			t1 = claim_space(nodes);
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			t2 = claim_text(div_nodes, /*counter*/ ctx[0]);
			div_nodes.forEach(detach);
			t3 = claim_space(nodes);
			button1 = claim_element(nodes, "BUTTON", { ["data-svelte-h"]: true });
			if (get_svelte_dataset(button1) !== "svelte-zuzbu4") button1.textContent = textContent_1;
		},
		m(target, anchor) {
			insert_hydration(target, button0, anchor);
			insert_hydration(target, t1, anchor);
			insert_hydration(target, div, anchor);
			append_hydration(div, t2);
			insert_hydration(target, t3, anchor);
			insert_hydration(target, button1, anchor);

			if (!mounted) {
				dispose = [
					listen(button0, "click", /*decrement*/ ctx[2]),
					listen(button1, "click", /*increment*/ ctx[1])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*counter*/ 1) set_data(t2, /*counter*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) {
				detach(button0);
				detach(t1);
				detach(div);
				detach(t3);
				detach(button1);
			}

			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let counter = 0;
	const increment = () => $$invalidate(0, counter++, counter);
	const decrement = () => $$invalidate(0, counter--, counter);
	return [counter, increment, decrement];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Component;