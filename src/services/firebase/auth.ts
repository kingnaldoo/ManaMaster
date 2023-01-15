import { GoogleSignin } from "@react-native-google-signin/google-signin";

export async function signIn() {
  GoogleSignin.configure({
    webClientId: "251196115149-a13bmm9fk9usi92pe431stju6a5oo8nh.apps.googleusercontent.com",
  });
  const value = await GoogleSignin.signIn();
  return value;
}

export async function signOut() {
  await GoogleSignin.signOut();
}
