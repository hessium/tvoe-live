import cl from "@/app/components/lyaoutComponents/Links/Links.module.scss";

export default function Links() {
    return (
        <nav className={cl.links}>
            <ul>
                <li>
                    <a href="@/app/components/lyaoutComponents/Links/Links#">Контакты</a>
                </li>
                <li>
                    <a href="@/app/components/lyaoutComponents/Links/Links#">Реферальная программа</a>
                </li>
                <li>
                    <a href="@/app/components/lyaoutComponents/Links/Links#">Скачать приложение</a>
                </li>
                <li>
                    <a href="@/app/components/lyaoutComponents/Links/Links#">Вопросы и ответы</a>
                </li>
                <li>
                    <a href="@/app/components/lyaoutComponents/Links/Links#">Условия использования</a>
                </li>
            </ul>
        </nav>
    )
}