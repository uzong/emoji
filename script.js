const emojiData = {
    emotions: [
        { char: '😀', keywords: ['笑脸', '开心', '高兴', '微笑'] },
        { char: '😃', keywords: ['大笑', '开心', '快乐'] },
        { char: '😄', keywords: ['笑眼', '开心', '快乐'] },
        { char: '😁', keywords: ['露齿笑', '开心', '得意'] },
        { char: '😆', keywords: ['眯眼笑', '开心', '大笑'] },
        { char: '😅', keywords: ['冷汗', '尴尬', '笑'] },
        { char: '🤣', keywords: ['笑倒', '大笑', '爆笑'] },
        { char: '😂', keywords: ['笑哭', '开心', '感动'] },
        { char: '🙂', keywords: ['微笑', '友好'] },
        { char: '🙃', keywords: ['倒脸', '开玩笑', '逗趣'] },
        { char: '😉', keywords: ['眨眼', '暗示', '调皮'] },
        { char: '😊', keywords: ['含羞', '害羞', '开心'] },
        { char: '😇', keywords: ['天使', '纯真', '善良'] },
        { char: '🥰', keywords: ['喜欢', '爱心', '恋爱'] },
        { char: '😍', keywords: ['爱心眼', '喜欢', '爱'] },
        { char: '🤩', keywords: ['星星眼', '崇拜', '兴奋'] },
        { char: '😘', keywords: ['飞吻', '亲亲', '爱'] },
        { char: '😗', keywords: ['亲', '亲亲'] },
        { char: '☺️', keywords: ['微笑', '温暖', '友好'] },
        { char: '😚', keywords: ['亲吻', '害羞', '闭眼'] },
        { char: '😙', keywords: ['亲吻', '开心'] },
        { char: '🥲', keywords: ['带泪微笑', '感动', '欣慰'] },
        { char: '😋', keywords: ['美味', '好吃', '开心'] },
        { char: '😛', keywords: ['吐舌', '调皮', '开玩笑'] },
        { char: '😜', keywords: ['眨眼吐舌', '调皮', '搞怪'] }
    ],
    
    animals: [
        { char: '🐶', keywords: ['狗', '小狗', '宠物'] },
        { char: '🐱', keywords: ['猫', '小猫', '宠物'] },
        { char: '🐭', keywords: ['老鼠', '耗子'] },
        { char: '🐹', keywords: ['仓鼠', '宠物'] },
        { char: '🐰', keywords: ['兔子', '兔兔', '宠物'] },
        { char: '🦊', keywords: ['狐狸', '动物'] },
        { char: '🐻', keywords: ['熊', '动物'] },
        { char: '🐼', keywords: ['熊猫', '国宝'] },
        { char: '🐨', keywords: ['考拉', '动物'] },
        { char: '🐯', keywords: ['老虎', '虎'] },
        { char: '🦁', keywords: ['狮子', '狮'] },
        { char: '🐮', keywords: ['牛', '奶牛'] },
        { char: '🐷', keywords: ['猪', '小猪'] },
        { char: '🐸', keywords: ['青蛙', '蛙'] },
        { char: '🐵', keywords: ['猴子', '猴'] },
        { char: '🦒', keywords: ['长颈鹿', '动物'] },
        { char: '🦘', keywords: ['袋鼠', '动物'] },
        { char: '🦡', keywords: ['獾', '动物'] },
        { char: '🦃', keywords: ['火鸡', '鸟'] },
        { char: '🐔', keywords: ['鸡', '公鸡'] },
        { char: '🐧', keywords: ['企鹅', '鸟'] },
        { char: '🦅', keywords: ['鹰', '老鹰'] },
        { char: '🦉', keywords: ['猫头鹰', '鸟'] },
        { char: '🦆', keywords: ['鸭子', '鸭'] },
        { char: '🐝', keywords: ['蜜蜂', '昆虫'] }
    ],
    
    food: [
        { char: '🍎', keywords: ['苹果', '水果', '红苹果'] },
        { char: '🍐', keywords: ['梨', '水果'] },
        { char: '🍊', keywords: ['橘子', '柑橘', '水果'] },
        { char: '🍋', keywords: ['柠檬', '水果'] },
        { char: '🍌', keywords: ['香蕉', '水果'] },
        { char: '🍉', keywords: ['西瓜', '水果'] },
        { char: '🍇', keywords: ['葡萄', '水果'] },
        { char: '🍓', keywords: ['草莓', '水果'] },
        { char: '🫐', keywords: ['蓝莓', '水果'] },
        { char: '🍒', keywords: ['樱桃', '水果'] },
        { char: '🥝', keywords: ['猕猴桃', '奇异果'] },
        { char: '🍅', keywords: ['番茄', '西红柿'] },
        { char: '🥥', keywords: ['椰子', '水果'] },
        { char: '🥑', keywords: ['牛油果', '水果'] },
        { char: '🍆', keywords: ['茄子', '蔬菜'] },
        { char: '🥦', keywords: ['西兰花', '蔬菜'] },
        { char: '🥬', keywords: ['生菜', '蔬菜'] },
        { char: '🥕', keywords: ['胡萝卜', '蔬菜'] },
        { char: '🌽', keywords: ['玉米', '蔬菜'] },
        { char: '🌶️', keywords: ['辣椒', '蔬菜'] },
        { char: '🥔', keywords: ['土豆', '蔬菜'] },
        { char: '🍠', keywords: ['红薯', '蔬菜'] },
        { char: '🥐', keywords: ['牛角面包', '面包'] },
        { char: '🥖', keywords: ['法棍', '面包'] },
        { char: '🥨', keywords: ['椒盐卷饼', '面包'] }
    ],
    
    activities: [
        { char: '⚽', keywords: ['足球', '运动', '球类'] },
        { char: '🏀', keywords: ['篮球', '运动', '球类'] },
        { char: '🏈', keywords: ['橄榄球', '运动', '球类'] },
        { char: '⚾', keywords: ['棒球', '运动', '球类'] },
        { char: '🎾', keywords: ['网球', '运动', '球类'] },
        { char: '🏐', keywords: ['排球', '运动', '球类'] },
        { char: '🏉', keywords: ['橄榄球', '运动', '球类'] },
        { char: '🎱', keywords: ['台球', '运动', '球类'] },
        { char: '🏓', keywords: ['乒乓球', '运动', '球类'] },
        { char: '🏸', keywords: ['羽毛球', '运动', '球类'] },
        { char: '🏊', keywords: ['游泳', '运动', '水上运动'] },
        { char: '🏃', keywords: ['跑步', '运动', '田径'] },
        { char: '🚴', keywords: ['骑行', '自行车', '运动'] },
        { char: '🧗', keywords: ['攀岩', '运动', '极限运动'] },
        { char: '🏋️', keywords: ['举重', '健身', '运动'] },
        { char: '🤸', keywords: ['体操', '运动', '技巧'] },
        { char: '⛷️', keywords: ['滑雪', '运动', '冬季运动'] },
        { char: '🏂', keywords: ['滑雪板', '运动', '冬季运动'] },
        { char: '🤺', keywords: ['击剑', '运动', '武术'] },
        { char: '🤼', keywords: ['摔跤', '运动', '武术'] },
        { char: '🎯', keywords: ['射箭', '运动', '目标'] },
        { char: '🎳', keywords: ['保龄球', '运动', '球类'] },
        { char: '🎪', keywords: ['马戏团', '表演', '娱乐'] },
        { char: '🎨', keywords: ['绘画', '艺术', '创作'] },
        { char: '🎭', keywords: ['表演', '戏剧', '艺术'] }
    ]
};

function initializeEmojiGrid() {
    const emojiGrid = document.getElementById('emojiGrid');
    
    // 初始显示所有表情
    displayEmojis('all');

    // 添加分类按钮点击事件
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            displayEmojis(e.target.dataset.category);
        });
    });

    // 添加搜索功能
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchEmojis(e.target.value);
    });
}

function displayEmojis(category) {
    const emojiGrid = document.getElementById('emojiGrid');
    emojiGrid.innerHTML = '<div class="loading">加载中...</div>';

    setTimeout(() => {
        emojiGrid.innerHTML = '';
        
        if (category === 'all') {
            Object.values(emojiData).flat().forEach(emoji => {
                createEmojiElement(emoji);
            });
        } else {
            const categoryEmojis = emojiData[category] || [];
            categoryEmojis.forEach(emoji => {
                createEmojiElement(emoji);
            });
        }
    }, 100); // 添加小延迟以显示加载状态
}

function createEmojiElement(emoji) {
    const div = document.createElement('div');
    div.className = 'emoji-item';
    div.textContent = emoji.char;
    div.setAttribute('data-keywords', emoji.keywords.join(','));
    div.addEventListener('click', () => {
        copyToClipboard(emoji.char);
    });
    document.getElementById('emojiGrid').appendChild(div);
}

function searchEmojis(query) {
    if (!query.trim()) {
        // 如果搜索框为空，显示所有emoji
        document.querySelectorAll('.emoji-item').forEach(item => {
            item.style.display = 'flex';
        });
        return;
    }

    const searchQuery = query.toLowerCase().trim();
    const emojiItems = document.querySelectorAll('.emoji-item');
    
    emojiItems.forEach(item => {
        const keywords = item.getAttribute('data-keywords').toLowerCase();
        const emoji = item.textContent;
        // 检查关键词或emoji本身是否匹配搜索词
        const visible = keywords.includes(searchQuery) || emoji.includes(searchQuery);
        item.style.display = visible ? 'flex' : 'none';
    });
}

function copyToClipboard(text) {
    // 使用现代API
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showToast();
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

// 后备复制方案
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast();
    } catch (err) {
        console.error('复制失败:', err);
    }
    
    document.body.removeChild(textArea);
}

function showToast() {
    const toast = document.getElementById('copyToast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initializeEmojiGrid); 