import styles from "./Email.module.scss";

export default function Email () {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
      <section className={styles.container}>
        <div className={styles.containerRight}>
            <h2> Fique por dentro das novidades</h2>
            <p> Receba ofertas exclusivas e novidades diretamente no seu e-mail.</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="email">Receber atualizações por e-mail</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Seu melhor e-mail"
                required
            />
            <button type="submit">Inscrever-se</button>
        </form>
      </section>
    )
}
