 const topics = [
            "「自分の人生」にタイトルを付けるとしたら",
            "「二日酔いの朝」にタイトルを付けてください",
            "好きな作家の好きな言葉は？",
            "これは自分には書けないなと思った歌詞または文章の一節は？",
            "好きなタイトルは？",
            "まずまずだなと思える自分の一行は",
            "「2泊3日旅の2日目の朝」にタイトルを付けてください",
            "「バイキングで食べ過ぎてしまう行為」にタイトルを付けてください",
            "「ステージに上がる直前の気持ち」にタイトルを付けてください",
            "「大人になってガッツポーズすること」にタイトルを付けてください",
            "「終電前に解散すること」にタイトルを付けてください",
            "「深夜2時に解散すること」にタイトルを付けてください",
            "「朝5時に集合すること」にタイトルを付けてください",
            "「電車でふと目が合った人」にタイトルを付けてください",
            "「初めてのデート」にタイトルを付けてください",
            "あなたの座右の銘は？",
            "あなたの人生で事あるごとに思い出す一行は？",
            "「初雪が降った日」にタイトルを付けてください",
            "「誰にも言えない秘密」にタイトルを付けてください",
            "「誕生日の0時を迎えた瞬間」にタイトルを付けてください",
            "「初めての一人旅」にタイトルを付けてください",
            "「久々に会った友人との再会」にタイトルを付けてください",
            "今の自分にタイトルをつけるなら？",
            "過去の自分に一言だけアドバイスするとしたら？",
            "最近、心に刺さった言葉は？",
            "最近、自分に問いかけた言葉は",
            "自分の信念を一行で表すと？",
            "未来の自分に送りたい言葉は？",
            "過去の自分に送りたい言葉は？",
            "あなたにとっての「自由」とは？",
            "「自分の限界を感じた瞬間」にタイトルを付けてください",
            "自分の子どもに一番伝えたい言葉は？",
            "「子どもの頃、初めて感じた大人っぽさ」にタイトルを付けてください",
            "朝、玄関で「いってきます」の代わりにいう言葉は？",
            "「曇り空が晴れた瞬間」にタイトルを付けてください",
            "「雨の日のおうち時間」にタイトルを付けてください",
            "「好きな人からの返信を待つ時間」にタイトルを付けてください",
            "「人生最大の挑戦」にタイトルを付けてください",
            "「新しい靴を履いた朝」にタイトルを付けてください",
            "「大事にしていたものを失くしたとき」にタイトルを付けてください",
            "「あなただけの至福の一時」にタイトルを付けてください",
            "今の自分の気持ちにぴったり寄り添う一文は？",
            "あなたの忘れたくない一行は？",
            "意味はわかっていないけれど、好きな言葉は？",
            "自分の価値観が変わった一行は？",
            "はっと気付かされた一行は？",
            "深夜に一人で読み返したい一行は？",
            "美しい景色の前で叫びたい一行は？",
            "自分が強くなれる気がする一行は？",
            "旅をしている時に思い出す一行は？"
        ];

        document.getElementById('change-topic').addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * topics.length);
            document.getElementById('topic').textContent = topics[randomIndex];
        });
