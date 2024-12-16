import { revalidateTag } from "next/cache";


export async function revalidatetodos() {
    revalidateTag('todos');
}