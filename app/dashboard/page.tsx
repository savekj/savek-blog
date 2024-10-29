"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth, firestore } from "../firebase/config"
import type { User } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import IconButton from "../components/IconButton"
import ConfirmDialog from "../components/Confirm"
import DeleteIcon from "../components/DeleteIcon"

const DashBoardPage = () => {
    const [user, setUser] = useState<User | null>(null)
    const [userName, setUserName] = useState("")
    const [loading, setLoading] = useState(true)
    const [confirmOpen, setConfirmOpen] = useState(false)

    const router = useRouter()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user)
                const userDoc = await getDoc(doc(firestore, "users", user.email!))

                if (userDoc.exists()) {
                    const userData = userDoc.data()
                    setUserName(`${userData.email} ${userData.user}`)
                }
                else {
                    router.push('/login')
                }
                setLoading(false)
            }
            else {
                router.push('/login')
            }
        })

        return () => unsubscribe()
    }, [router])

    const handleLogout = async () => {
        try {
            await signOut(auth)
            router.push('/login')
        }
        catch (error) {
            console.error("Logout Error : ", error)
        }
    }

    const handleDeleteUser = async () => {
        var currentUser = auth.currentUser

        try {
            currentUser!.delete().then(function () {
                alert("ลบข้อมูลเรียบร้อย")
            }).catch(function (error) {
                alert(error)
            });
            router.push('/login')
        }
        catch (error) {
            console.error("Logout Error : ", error)
        }
    }

    const handleChangePassword = async () => {
        router.push('/passwordchange')
    }

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className="min-h-screen bg-gray-100 bg-gradient-to-b from-gray-600 to-black">
            <nav className="bg-gray-800 p-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="text-white text-xl">DashBoard</div>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="flex flex-col items-center justify-center flex-grow mt-10">
                {userName && (
                    <h2 className="text-4xl font-bold mb-6  text-white">Welcome, {userName}</h2>
                )}
                <div className="space-x-4">
                    {/* <button
                        onClick={handleDeleteUser}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                    >
                        Delete User
                    </button> */}
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Logout
                    </button>
                    <IconButton aria-label="delete" onClick={() => setConfirmOpen(true)}>
                        {/* <DeleteIcon /> */}
                        <button
                            // onClick={handleDeleteUser}
                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                        >
                            Delete User
                        </button>
                    </IconButton>
                    <ConfirmDialog
                        title="Delete Account?"
                        open={confirmOpen}
                        onClose={() => setConfirmOpen(false)}
                        onConfirm={handleDeleteUser}
                    >
                        Are you sure you want to delete your account?
                    </ConfirmDialog>
                </div>
            </main>
        </div>
    )
}

export default DashBoardPage;