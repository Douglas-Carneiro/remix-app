import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

import { getContact, deleteContact } from "../data";

export const action = async ({
    params,
  }: ActionFunctionArgs) => {
    invariant(params.contactId, "Missing contactId param");
    await deleteContact(params.contactId);
    return redirect(`/`);
};