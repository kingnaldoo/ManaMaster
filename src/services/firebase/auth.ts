import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Config from "react-native-config";

export async function signIn() {
  GoogleSignin.configure({
    webClientId: Config.GOOGLE_WEB_CLIENT_ID,
  });
  const value = await GoogleSignin.signIn();
  return value;
}

export async function signOut() {
  await GoogleSignin.signOut();
}
