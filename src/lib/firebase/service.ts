import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function retriveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retriveDataById(collectionName: string, id: string) {
  const documentSnapshot = await getDoc(doc(firestore, collectionName, id));
  const data = documentSnapshot.data();
  return data;
}

export async function signUp(
  userData: {
    fullname: string;
    email: string;
    password: string;
    role?: string;
  },
  callback: Function
) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    console.log(data);
    callback({
      status: false,
      message: "Email already exists",
    });
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = "member";
    await addDoc(collection(firestore, "users"), userData)
      .then(() => {
        callback({
          status: true,
          message: "Register successful",
        });
      })
      .catch((error) => {
        callback({
          status: false,
          message: error.message,
        });
      });
  }
}

export async function signIn(userData: { email: string }) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );

  const snapshot = await getDocs(q);

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (data) {
    return data[0];
  } else {
    return null;
  }
}

export async function signInWithGoogle(userData: any, callback: any) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );

  const snapshot = await getDocs(q);
  const data: any = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    // Check if fullname is defined in userData
    if (userData.length > 0) {
      userData.role = data[0].role;
      await updateDoc(doc(firestore, "users", data[0].id), userData)
        .then(() => {
          callback({
            status: true,
            message: "Success Sign In with Google",
            data: userData,
          });
        })
        .catch(() => {
          callback({
            status: false,
            message: "Sign In with Google failed",
          });
        });
    } else {
      // Handle the case where fullname is undefined in userData
      callback({
        status: false,
        message: "Fullname is undefined in userData",
      });
    }
  } else {
    userData.role = "member";
    await addDoc(collection(firestore, "users"), userData)
      .then(() => {
        callback({
          status: true,
          message: "Success Sign In with Google",
          data: userData,
        });
      })
      .catch(() => {
        callback({
          status: false,
          message: "Sign In with Google failed",
        });
      });
  }
}
