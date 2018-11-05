<template>
    <main class="page">
        <section class="page-section js-page-section" id="info">
            <div class="section-content">
                <h1 class="section-title">
                    Web Tycoon
                </h1>

                <div class="section-description">
                    Окунись в мир веб-технологий и покори вершины мировой сети
                </div>

                <button class="reg-button" @click="navUser">
                    Зарегистрироваться
                </button>

                <div class="social-icons-block">
                    <a href="https://t.me/web_tycoon" target="_blank">
                        <i class="fab fa-telegram-plane"></i>
                    </a>

                    <a href="https://vk.com/web_tycoon" target="_blank">
                        <i class="fab fa-vk"></i>
                    </a>

                    <a href="https://www.facebook.com/webtycooncom/" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                    </a>

                    <a href="https://web-tycoon.com/" target="_blank">
                        <i class="fas fa-rss"></i>
                    </a>

                    <a href="https://www.youtube.com/channel/UCsiYSp4H9PrFptMD26tK5Ng" target="_blank">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>

                <div class="scroll-downs">
                    <div class="mousey">
                        <div class="scroller"></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="page-section js-page-section" id="pros">
            <div class="section-content jcr">
                <div class="main-page">

                    <div class="overlay1"></div>
                    <div class="overlay2"></div>

                    <div class="main-page-info">
                        <div>
                            <h3 class="page-info-title">
                                Web Tycoon
                            </h3>

                            <p class="page-info-description">
                                Бесплатная массовая многопользовательская экономическая стратегия, в которой вам предстоит взять на себя роль вебмастера, окунуться в мир веб-технологий и покорить вершины мировой сети.
                            </p>

                            <div class="video-container">
                                <iframe
                                        width="100%"
                                        height="auto"
                                        src="https://www.youtube.com/embed/iDytJAnsbk0"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="page-section js-page-section" id="promo">
            <div class="video-container-wrap">
                <h1 class="section-subtitle">Об игре</h1>

                <div class="game-description-items">
                    <div class="game-description-item">
                        <h3 class="description-item-title">
                            <i class="material-icons">trending_up</i>
                            Станьте во главе новой индустрии
                        </h3>
                        <p class="description-item-description">
                            Вы начинаете игру на заре новой эпохи, когда веб-индустрия только начинает развиваться. Вы стоите у истоков новых технологий, и впереди длинный путь по развитию своих навыков.
                        </p>
                    </div>

                    <div class="game-description-item">
                        <h3 class="description-item-title">
                            <i class="material-icons">update</i>
                            Воссоздайте сайты, которые популярны сейчас
                        </h3>
                        <p class="description-item-description">Завоевав преимущество - не упускайте его. На прибыль, полученную от созданных сайтов, вы сможете нанять сотрудников, которые будут помогать вам развивать ваш бизнес, или фрилансеров, выполняющих разовые задачи.</p>
                    </div>

                    <div class="game-description-item">
                        <h3 class="description-item-title">
                            <i class="material-icons">whatshot</i>
                            Создавайте и используйте самые новые технологии</h3>
                        <p class="description-item-description">Развивайте сайт, используя все время обновляющиеся технологии. Поддерживайте выбранный вами баланс развития всех составляющих сайта, наполняйте его контентом, не забывайте об его продвижени!</p>
                    </div>

                    <div class="game-description-item">
                        <h3 class="description-item-title">
                            <i class="material-icons">person_add</i>
                            Объединяйтесь и открывайте новые технологии первыми</h3>
                        <p class="description-item-description">Зарабатывайте на ваших сайтах с помощью продажи рекламных мест, обменивайтесь ссылками, вступайте в кольца сайтов и объединяйтесь в крупные холдинги!</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="page-section js-page-section" id="comments">
            <div class="comments section-content">
                <h1 class="section-subtitle">Отзывы пользователей</h1>

                <div class="comments-list">
                    <div class="comment comment1">
                        <div class="user-info">
                            <div class="comment-avatar"></div>
                            <div class="comment-name">Анастасия</div>
                        </div>
                        <div class="comment-text">Отличная игра! Понравилась с первой минуты игры. Очень напоминает любимую игру детства - Sims, только для взрослых :)</div>
                    </div>

                    <div class="comment comment2">
                        <div class="user-info">
                            <div class="comment-avatar"></div>
                            <div class="comment-name">Кирилл</div>
                        </div>
                        <div class="comment-text">Всегда мечтал создать собственный Google и вот мне выпала такая возможность! С удовольствием играю здесь каждый день, пока всё очень нравится!</div>
                    </div>

                    <div class="comment comment3">
                        <div class="user-info">
                            <div class="comment-avatar"></div>
                            <div class="comment-name">Владимир</div>
                        </div>
                        <div class="comment-text">Игра нравится своим реализмом и тем, что не занимает много времени. Всего 60 минут на протяжении дня позволяют мне не терять рейтинг своих проектов и постоянно их развивать</div>
                    </div>

                    <div class="comment comment4">
                        <div class="user-info">
                            <div class="comment-avatar"></div>
                            <div class="comment-name">Анна</div>
                        </div>
                        <div class="comment-text">Легко достигла 15-го уровня и продолжаю играть с большим удовольствием. С нетерпением жду PvP битв и возможности проведения хакерских атак</div>
                    </div>
                </div>
            </div>
        </section>

        <button class="scroll-to-top-btn" @click="scrollToTop" v-show="currentScrollHeight > 300">
            <i class="material-icons">keyboard_arrow_up</i>
        </button>

        <div class="sections-switcher-wrap">
            <div class="sections-switcher">
                <div
                    class="switcher-item"
                    v-for="(sectionId, index) in sectionsIds"
                    @click="scrollToSection(sectionId)"
                    :class="{active: index <= currentSectionId}"
                >
                    <div class="tooltip">{{itemNames[index]}}</div>
                    <div class="switcher-item-inner" :class="{active: index <= currentSectionId}"></div>
                </div>

                <div class="switcher-scale">
                    <div
                        class="switcher-scale-item"
                        v-for="(line, lineIndex) in Array(sectionsIds.length - 1)"
                        :class="{active: lineIndex <= currentSectionId - 1}"
                    ></div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: "Main",

        data() {
            return {
                currentScrollHeight: window.pageY,

                currentSectionId: 0,

                sectionsIds: [
                    'info',
                    'pros',
                    'promo',
                    'comments',
                ],

                itemNames: [
                    'Регистрация',
                    'Возможности',
                    'Об игре',
                    'Отзывы пользователей',
                ],
            }
        },

        mounted() {
            window.addEventListener("scroll", this.scrollHandler);
        },

        methods: {
            scrollToTop() {
                this.smoothScrollToY(0);
            },

            scrollToSection(sectionId) {
                this.currentSectionId = this.sectionsIds.indexOf(sectionId);

                const sectionElement = document.getElementById(sectionId);
                const sectionElementTop = this.getScrollTopOffsetOfElement(sectionElement);

                this.smoothScrollToY(sectionElementTop, 300);
            },

            smoothScrollToY(scrollToY, duration = 300) {
                const startingY = window.scrollY;
                const diff = scrollToY - startingY;
                let start;

                window.requestAnimationFrame(function step(timestamp) {
                    if(!start) {
                        start = timestamp;
                    }

                    const time = timestamp - start;
                    const percent = Math.min(time / duration, 1);

                    window.scrollTo(0, startingY + diff * percent);

                    if(time < duration) {
                        window.requestAnimationFrame(step)
                    }
                });
            },

            getScrollTopOffsetOfElement(element) {
                const elementTopValue = element.getBoundingClientRect().top;
                const bodyTopValue = document.body.getBoundingClientRect().top;
                return elementTopValue - bodyTopValue;
            },

            scrollHandler() {
                const scrollTop = window.scrollY;
                const infoBlocks = [...document.querySelectorAll(".js-page-section")];
                const nextInfoBlockOffsetThreshold = 200;

                this.currentScrollHeight = scrollTop;

                const infoBlockInViewport = infoBlocks.filter(infoBlock => {
                    const infoBlockScrollOffset = this.getScrollTopOffsetOfElement(infoBlock);
                    const infoBlockHeight = infoBlock.clientHeight;
                    const infoBlockBottomPosition = infoBlockScrollOffset + infoBlockHeight;
                    return infoBlockBottomPosition > scrollTop + nextInfoBlockOffsetThreshold;
                });

                const firstInfoBlockInViewport = infoBlockInViewport.length
                    ? infoBlockInViewport[0]
                    : null;

                const activeItemIndex = infoBlocks.indexOf(firstInfoBlockInViewport);

                if(activeItemIndex >= 0) {
                    this.currentSectionId = activeItemIndex;
                }

            },

            navUser() {
                window.open('https://game.web-tycoon.com/?invite=QMwQDO&utm_source=konkurs&utm_medium=kit&utm_campaign=wt-promo');
            }
        }
    }
</script>

<style lang="less">
    @import '../constants';

    .page-section {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px 0;
        position: relative;
        overflow: hidden;
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
    }

    .scroll-to-top-btn {
        position: fixed;
        right: 16px;
        bottom: 16px;
        background: @primary;
        border: 1px solid @primary;
        outline: none;
        height: 56px;
        width: 56px;
        border-radius: 50%;
        box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        transition: opacity 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), color 1ms;
        z-index: 11;

        opacity: 0.4;

        &:hover {
            background-color: #F57C00;
            cursor: pointer;
            opacity: 1;
        }

        @media screen and (max-width: 450px) {
            bottom: 55px;
            width: 36px;
            height: 36px;
        }
    }

    .sections-switcher-wrap {
        @media screen and (max-width: 1000px) {
            width: 100%;
            height: 60px;
            background: #263238;
            position: fixed;
            bottom: 0;
            z-index: 10;
        }
    }

    .sections-switcher {
        position: fixed;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
        height: 250px;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        z-index: 10;

        opacity: 0.4;
        transition: opacity 0.3s ease;

        &:hover {
            opacity: 1;
        }

        .switcher-item {
            width: 30px;
            height: 30px;
            border: 2px solid @lgray;
            padding: 6px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            background-color: @bg;
            z-index: 2;
            cursor: pointer;
            transition: border-color .3s ease-in-out;

            &.active {
                border: 2px solid @primary;
            }

            &:hover {
                .tooltip {
                    display: block;
                }
            }
        }

        .switcher-item-inner {
            transition: background-color .3s ease-in-out;
            background-color: @lgray;
            width: 10px;
            height: 10px;
            border-radius: 50%;

            &.active {
                background-color: @primary;
            }
        }

        .switcher-scale {
            height: 100%;
            position: absolute;
            top: 0;
            width: 4px;
        }

        .switcher-scale-item {
            flex-basis: 33%;
            height: 33%;
            background-color: @lgray;
            transition: background-color .3s ease-in-out;

            &.active {
                background-color: @primary;
            }
        }

        @media screen and (max-width: 1000px) {
            bottom: 16px;
            left: 50%;
            transform: translateX(-50%);
            flex-direction: row;
            width: 250px;
            height: auto;
            top: auto;
            right: auto;

            .switcher-scale {
                height: 4px;
                width: 100%;
                left: 0;
                top: 50%;
                display: flex;
            }

            .switcher-scale-item {
                height: 100%;
            }
        }
    }

    .tooltip {
        display: none;

        position: absolute;
        right: 50px;
        top: -5px;
        background-color: #fafafa;
        padding: 6px 12px;
        border-radius: 4px;
        width: auto;
        color: #212121;
        white-space: nowrap;
        z-index: 10;

        &:after {
            content: "";
            display: block;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 5px 0 5px 10px;
            border-color: transparent transparent transparent #fafafa;
            position: absolute;
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
        }

        @media screen and (max-width: 1000px) {
            display: none !important;
        }
    }


    .scroll-downs {
        width :34px;
        height: 55px;
        display: block;
        margin: 12px auto;
    }
    .mousey {
        width: 3px;
        padding: 10px 15px;
        height: 35px;
        border: 2px solid #fff;
        border-radius: 25px;
        opacity: 0.75;
        box-sizing: content-box;
    }
    .scroller {
        width: 3px;
        height: 10px;
        border-radius: 25%;
        background-color: #fff;
        animation-name: scroll;
        animation-duration: 2.2s;
        animation-timing-function: cubic-bezier(.15,.41,.69,.94);
        animation-iteration-count: infinite;
    }
    @keyframes scroll {
        0% { opacity: 0; }
        10% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(15px); opacity: 0;}
    }

    .reg-button {
        border-radius: 28px;
        background: #f4511e;
        border: 1px solid #f4511e;
        padding: 0 24px;
        font-size: 20px;
        color: white;
        line-height: 48px;
        display: block;
        margin: 18px auto;
        cursor: pointer;
        transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
        outline: none;

        &:hover {
            background-color: #D84315;
        }
    }

    .section-content {
        max-width: 900px;
        padding: 18px;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .section-title {
        font-size: 82px;
        line-height: 100px;
        letter-spacing: 2px;
    }

    .section-description {
        font-size: 20px;
        margin: 12px 0;
        color: #B0BEC5;
        line-height: 30px;
    }

    .video-container-wrap {
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        padding: 0 18px;
    }

    .video-container {
        position:relative;
        padding-bottom: 56.25%;
        padding-top:30px;
        height:0;
        overflow:hidden;
        margin-top: 30px;
        margin-bottom: 100px;
        border-radius: 6px;
    }

    .video-container iframe, .video-container object, .video-container embed {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }

    .comments-list {
        max-width: 900px;
        width: 100%;
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: space-between;

        @media screen and (max-width: 800px) {
            justify-content: center;
        }
    }

    .comment {
        flex-basis: 370px;

        margin-top: 24px;
        margin-bottom: 18px;

        padding: 6px 18px;

        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;

        @media screen and (max-width: 800px) {
            max-width: 100%;
            justify-content: center;
            padding-left: 0;
            padding-right: 0;
        }

        &.comment1 .comment-avatar {
            background: url("../assets/images/ava1.jpg");
        }

        &.comment2 .comment-avatar {
            background: url("../assets/images/ava2.jpg");
        }

        &.comment3 .comment-avatar {
            background: url("../assets/images/ava4.jpg");
            background-position-x: 210px;
        }

        &.comment4 .comment-avatar {
            background: url("../assets/images/ava3.jpg");
            background-position-y: -10px !important;
        }
    }

    .user-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .comment-avatar {
        width: 150px;
        flex-basis: 150px;
        height: 150px;
        border-radius: 50%;
        background-size: cover !important;
        background-repeat: no-repeat;
        margin-bottom: 12px;
        border: 3px solid @primary;
    }

    .comment-text {
        padding: 12px;
        min-width: 250px;
        color: #B0BEC5;
        text-align: center;
        line-height: 30px;
    }

    .comment-name {
        font-size: 24px;
        margin-top: 12px;
        margin-bottom: 12px;
    }

    .section-subtitle {
        color: @primary;
        font-size: 30px;
        margin-bottom: 30px;
        text-align: center;

        @media screen and (max-width: 800px) {
            margin-bottom: 12px;
        }
    }

    .opportunities-list {
        margin-bottom: 40px;
    }

    .opportunity {
        display: flex;
        align-items: center;
        margin: 18px 0;
        font-size: 20px;
    }

    .opportunity-text {
        line-height: 30px;
        text-align: left;
        color: #B0BEC5;
    }

    .opportunity-icon {
        margin-right: 18px;
        color: @primary;

        i {
            font-size: 30px;
        }
    }

    .primary-span {
        color: @primary;
        font-size: larger;
        font-weight: bold;
    }

    .game-description {
        p {
            margin: 12px 0;
        }
    }

    .social-icons-block {
        display: flex;

        a {
            color: white;
            margin: 0 6px;
            width: 36px;
            height: 36px;
            text-align: center;
            border-radius: 50%;
            text-decoration: none;

            display: flex;
            align-items: center;
            justify-content: center;

            transition: background-color .3s ease;

            &:hover {
                background: #455A64;
            }
        }
    }

    .game-description-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        /*margin-top: 50px;*/

        .game-description-item {
            flex-basis: 370px;
            margin-bottom: 18px;
            margin-top: 24px;
            padding: 6px 12px;
        }

        .description-item-title {
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            font-weight: normal;
            line-height: 30px;

            i {
                color: @primary;
                display: block;
                margin-right: 18px;
                font-size: 36px;
            }
        }

        .description-item-description {
            color: #B0BEC5;
            text-indent: 54px;
            line-height: 30px;
        }

        @media screen and (max-width: 800px) {
            justify-content: center;

            .description-item-description {
                text-indent: 0;
                text-align: center;
            }

            .description-item-title {
                flex-direction: column;
                text-align: center;

                i {
                    margin-right: 0;
                    margin-bottom: 12px;
                }
            }
        }
    }

    .gallery-element {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .silentbox-item {
        margin: 6px 12px;
        border: 2px solid @primary;
        border-radius: 6px;
        overflow: hidden;
        display: flex;
        align-items: center;
    }

    .gallery-item-preview {
        width: 100px;
        height: 70px;
        object-fit: cover;
        object-position: center;
    }

    .overlay1 {
        max-width: 1500px;
        width: 98%;
        height: 95%;
        border-radius: ~'28% 72% 70% 30% / 15% 50% 50% 85%';
        background: #37474F;
        position: absolute;
        top: -100px;
        left: -100px;
        z-index: 3;

        @media screen and (max-width: 1000px) {
            left: -10px;
        }

        @media screen and (max-width: 500px) {
            left: -30px;
            width: 136%;
            height: 93%;
        }
    }

    .overlay2 {
        max-width: 1520px;
        width: 100%;
        height: 92%;
        border-radius: ~'39% 61% 53% 47% / 25% 48% 52% 75%';
        background: @primary;
        position: absolute;
        top: -100px;
        left: -100px;
        z-index: 2;

        @media screen and (max-width: 1000px) {
            left: -50px;
            width: 106%;
        }

        @media screen and (max-width: 450px) {
            width: 122%;
        }
    }

    .main-page-info {
        z-index: 6;
        position: relative;
        /*text-align: left;*/
        max-width: 500px;
    }

    .page-info-description {
        font-size: 20px;
        margin: 12px 0;
        color: #B0BEC5;
        line-height: 30px;
    }

    .page-info-title {
        font-size: 82px;
        line-height: 100px;
        letter-spacing: 2px;
    }

    #info {
        z-index: 10;
    }
</style>