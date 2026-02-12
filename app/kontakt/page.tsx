import {redirect} from "next/navigation";

/**
 * Kontakt jest sekcją na stronie głównej (#kontakt).
 * Przekierowanie zachowuje działanie starych linków i bookmarks.
 */
export default function KontaktPage() {
  redirect("/#kontakt");
}
