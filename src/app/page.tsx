import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

/*
function SignIn({
     provider,
     ...props
   }: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider)
      }}
    >
      <Button {...props}>Sign In</Button>
    </form>
  )
}

 */

export default async function Home() {
  //const session = await useSession()
  //if (!session?.data?.user) return <SignIn />

  return (
    <main className={styles.main}>
      <div className={styles.description} />

      <div className={styles.center}>
        Wizard Admin Console
      </div>

      <div className={styles.grid}>
        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about features.</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Explore all the documentation.</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <Link
          href="/api/auth/signin?callbackUrl=/studio/home/dashboard"
          className={styles.card}
        >
          <h2>
            Login <span>-&gt;</span>
          </h2>
          <p>
            Login to the Health App and start exploring.
          </p>
        </Link>
      </div>
    </main>
  );
}
