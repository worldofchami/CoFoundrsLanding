"use server"

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { DBResponse } from "./interfaces";

export async function submitForm(formData: FormData): Promise<DBResponse> {
	"use server"
	const supabase = createServerActionClient({ cookies });

	const email = formData.get("email");

	if(!email) {
		return {
			ok: false,
			message: "Please enter a valid email!"
		}
	}

	const { error } = await supabase
		.from("mailing_list")
		.upsert({
			email
		});

	if(error) {
		return {
			ok: false,
			message: "Please enter a valid email!"
		}
	}

	return {
		ok: true,
		message: "Thanks for joining! We'll keep you notified of any news."
	}
}