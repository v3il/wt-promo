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

                <div class="scroll-downs">
                    <div class="mousey">
                        <div class="scroller"></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="page-section js-page-section" id="promo">
            <div class="video-container-wrap">
                <h1 class="section-subtitle">Обзор игры</h1>

                <div class="game-description">
                    <p><span class="primary-span">Web Tycoon</span> — бесплатная массовая многопользовательская экономическая стратегия, в которой вам предстоит взять на себя роль вебмастера, окунуться в мир веб-технологий и покорить вершины мировой сети.</p>
                    <p>Развивайте сайт, используя все время обновляющиеся технологии. Поддерживайте выбранный вами баланс развития всех составляющих сайта, наполняйте его контентом, не забывайте об его продвижени!</p>
                    <p>Завоевав преимущество - не упускайте его. На прибыль, полученную от созданных сайтов, вы сможете нанять сотрудников, которые будут помогать вам развивать ваш бизнес, или фрилансеров, выполняющих разовые задачи.</p>
                </div>

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
        </section>

        <section class="page-section js-page-section" id="pros">
            <div class="section-content">
                <h1 class="section-subtitle">Возможности</h1>

                <div class="opportunities-list">
                    <div class="opportunity" v-for="opportunity in opportunities">
                        <div class="opportunity-icon">
                            <i class="material-icons">where_to_vote</i>
                        </div>
                        <div class="opportunity-text">
                            {{opportunity.text}}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="page-section js-page-section" id="comments">
            <div class="comments section-content">
                <h1 class="section-subtitle">Отзывы пользователей</h1>

                <div class="comment comment1">
                    <div class="user-info">
                        <div class="comment-avatar"></div>
                        <div class="comment-name">Анастасия</div>
                    </div>
                    <div class="comment-text">Отличная игра! Понравилась с первой минуты игры. Очень напоминает любимую игру детства - Sims, только больше ориентированную на бизнес :)</div>
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
                    <div class="comment-text">Игра нравится своим реализмом и тем, что не занимает много времени. Всего 30 минут на протяжении дня позволяют мне не терять рейтинг своих проектов и постоянно их развивать</div>
                </div>

                <div class="comment comment4">
                    <div class="user-info">
                        <div class="comment-avatar"></div>
                        <div class="comment-name">Анна</div>
                    </div>
                    <div class="comment-text">Легко достигла 25 уровня и продолжаю играть с большим удовольствием. С нетерпением жду PvP битв и возможности проведения хакерских атак</div>
                </div>
            </div>
        </section>

        <button class="scroll-to-top-btn" @click="scrollToTop" v-show="currentScrollHeight > 300">
            <i class="material-icons">keyboard_arrow_up</i>
        </button>

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
    </main>
</template>

<script>
    export default {
        name: "Main",

        data: () => ({
            currentScrollHeight: window.pageY,

            currentSectionId: 0,

            sectionsIds: [
                'info',
                'promo',
                'pros',
                'comments',
            ],

            itemNames: [
                'Зарегистрироваться',
                'Обзор игры',
                'Возможности',
                'Отзывы пользователей',
            ],

            opportunities: [
                {
                    text: 'Участвуйте в истории развития сети Интернет, какой мы знаем ее сейчас',
                    image: '',
                },

                {
                    text: 'Познакомтесь с процессами создания сайта: от идеи и разработки до раскрутки и менеджмента',
                    image: '',
                },

                {
                    text: 'Воссоздайте сайты, которые популярные сейчас и завоюйте целые сегменты рынка',
                    image: '',
                },

                {
                    text: 'Создавайте самые передовые технологии и применяйте их в своих проектах',
                    image: '',
                },

                {
                    text: 'Кооперируйтесь с другими игроками для достижения лучших результатов',
                    image: '',
                },
            ]
        }),

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
        transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), color 1ms;

        &:hover {
            background-color: #F57C00;
            cursor: pointer;
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

        @media screen and (max-width: 800px) {
            display: none;
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
        max-width: 700px;
        padding: 24px;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .section-title {
        font-size: 82px;
        line-height: 80px;
        letter-spacing: 2px;
    }

    .section-description {
        font-size: 20px;
        margin: 12px 0;
    }

    .video-container-wrap {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
    }

    .video-container {
        position:relative;
        padding-bottom: 56.25%;
        padding-top:30px;
        height:0;
        overflow:hidden;
        margin-top: 18px;
    }

    .video-container iframe, .video-container object, .video-container embed {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }

    .comment {
        max-width: 80%;
        width: 100%;

        margin-top: 24px;
        margin-bottom: 24px;

        padding: 6px 18px;

        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;

        @media screen and (max-width: 800px) {
            max-width: 100%;
            justify-content: center;
        }

        &.comment1, &.comment3 {
            margin-right: auto;
        }

        &.comment2, &.comment4 {
            margin-left: auto;
            flex-direction: row-reverse;
        }

        &.comment1 .user-info, &.comment3 .user-info {
            margin-right: 18px;
        }

        &.comment2 .user-info, &.comment4 .user-info {
            margin-left: 18px;
        }

        &.comment1 .comment-avatar {
            background: url("../assets/images/ava1.jpg");
        }

        &.comment2 .comment-avatar {
            background: url("../assets/images/ava2.jpg");
        }

        &.comment3 .comment-avatar {
            background: url("../assets/images/ava4.jpg");
            background-position-x: 120px;
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
        width: 84px;
        flex-basis: 84px;
        height: 84px;
        border-radius: 50%;
        background-size: cover !important;
        background-repeat: no-repeat;
        margin-bottom: 12px;
    }

    .comment-text {
        background: #fafafa;
        border-radius: 4px;
        color: #212121;
        padding: 12px;
        flex: 1;
        min-width: 250px;
    }

    &.comment1 .comment-text, &.comment3 .comment-text {
        border-radius: 12px 24px;
    }

    &.comment2 .comment-text, &.comment4 .comment-text {
        border-radius: 24px 12px;
    }

    .section-subtitle {
        color: @primary;
        font-size: 30px;
        text-align: center;
    }

    .opportunity {
        display: flex;
        align-items: center;
        margin: 18px 0;
        font-size: 20px;
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
</style>