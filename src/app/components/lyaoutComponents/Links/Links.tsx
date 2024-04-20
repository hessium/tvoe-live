import cl from "@/app/components/lyaoutComponents/Links/Links.module.scss";

export default function Links() {
    return (
        <nav className={cl.links}>
            <ul>
                <li>
                    <a href="#">Контакты</a>
                </li>
                <li>
                    <a href="#">Реферальная программа</a>
                </li>
                <li>
                    <a href="#">Скачать приложение</a>
                </li>
                <li>
                    <a href="#">Вопросы и ответы</a>
                </li>
                <li>
                    <a href="#">Условия использования</a>
                </li>
            </ul>
        </nav>
    )
}