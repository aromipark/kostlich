const nutrientData = {
    carbs: {
        id: 'carbs',
        name: '탄수화물',
        emoji: '🍞',
        color: 'bg-yellow-400',
        title: '바로 쓰는 주력 에너지!',
        metaphor: '자동차의 휘발유',
        description: '우리가 생각하고, 움직이고, 공부하는 등 모든 활동에 필요한 힘을 가장 먼저 만들어내는 주력 에너지원입니다. 뇌가 활동하는 데 꼭 필요한 영양소이기도 해요.',
        foods: ['밥', '빵', '국수', '감자', '고구마', '옥수수'],
    },
    protein: {
        id: 'protein',
        name: '단백질',
        emoji: '🍗',
        color: 'bg-sky-400',
        title: '몸을 만들고 고치는 건축가!',
        metaphor: '집 짓는 벽돌',
        description: '우리 몸의 근육, 머리카락, 피부, 손톱 등을 만드는 재료입니다. 상처가 났을 때 몸을 회복시키는 역할도 하고, 키가 크는 데 아주 중요해요.',
        foods: ['소고기', '돼지고기', '닭고기', '생선', '두부', '계란', '콩'],
    },
    fat: {
        id: 'fat',
        name: '지방',
        emoji: '🥑',
        color: 'bg-orange-400',
        title: '저장해두는 비상 에너지!',
        metaphor: '보조 배터리',
        description: '탄수화물처럼 에너지를 내지만, 쓰고 남은 에너지를 몸에 저장해두었다가 필요할 때 사용합니다. 체온을 유지하고 우리 몸의 장기를 보호하는 역할도 해요.',
        foods: ['버터', '식용유', '참기름', '견과류', '치즈'],
    },
    vitamins: {
        id: 'vitamins',
        name: '비타민',
        emoji: '🥦',
        color: 'bg-green-400',
        title: '몸 공장의 기술자들!',
        metaphor: '공장의 엔지니어/윤활유',
        description: '아주 적은 양이 필요하지만 우리 몸의 기능이 원활하게 작동하도록 돕는 필수 영양소입니다. 에너지를 만드는 과정을 돕고, 몸의 저항력을 키워줘요.',
        foods: ['각종 채소', '과일 (딸기, 오렌지, 키위 등)'],
    },
    minerals: {
        id: 'minerals',
        name: '무기질',
        emoji: '🦴',
        color: 'bg-indigo-400',
        title: '몸의 뼈대를 세우는 일꾼!',
        metaphor: '뼈, 치아, 혈액 등 구성',
        description: '비타민처럼 몸의 기능을 조절하고, 뼈나 치아처럼 몸의 일부를 구성하기도 합니다. 칼슘은 뼈를, 철분은 피를 만드는 데 중요해요.',
        foods: ['멸치', '우유', '미역', '다시마', '시금치', '소금'],
    },
    water: {
        id: 'water',
        name: '물',
        emoji: '💧',
        color: 'bg-blue-400',
        title: '생명의 근원!',
        metaphor: '만능 배달부이자 청소부',
        description: '우리 몸의 60~70%를 차지하는 가장 중요한 영양소입니다. 영양소를 온몸으로 운반하고, 몸속 노폐물을 밖으로 내보내며, 체온을 조절하는 등 생명 유지에 필수적입니다.',
        foods: ['물', '과일주스', '수분이 많은 과일/채소'],
    }
};

const activityFoods = [
    { name: '밥', type: 'energy' }, { name: '소고기', type: 'builder' }, { name: '버터', type: 'energy' },
    { name: '두부', type: 'builder' }, { name: '시금치', type: 'regulator' }, { name: '빵', type: 'energy' },
    { name: '멸치', type: 'regulator' }, { name: '계란', type: 'builder' }, { name: '오렌지', type: 'regulator' }
];

const detectiveCases = [
    {
        case: '옛날 뱃사람들이 오랜 항해 후 잇몸에서 피가 나고 힘없이 쓰러졌어요. 신선한 과일과 채소를 먹자 병이 나았다고 해요.',
        culprit: '비타민 C',
        options: ['비타민 C', '칼슘', '단백질', '철분'],
        feedback: '정답! 비타민 C는 피부와 잇몸을 튼튼하게 해요. 부족하면 괴혈병에 걸릴 수 있어요.'
    },
    {
        case: '어두운 곳에 들어가면 잘 보이지 않고, 눈이 뻑뻑하고 건조해지는 증상이 나타났어요.',
        culprit: '비타민 A',
        options: ['지방', '물', '비타민 A', '탄수화물'],
        feedback: '맞아요! 비타민 A는 시력 보호와 피부 건강에 중요해요. 부족하면 야맹증에 걸릴 수 있습니다.'
    },
    {
        case: '성장기 어린이의 뼈가 약해지고 휘는 증상이 나타났어요. 햇볕을 충분히 쬐지 못했다고 해요.',
        culprit: '비타민 D',
        options: ['비타민 D', '철분', '탄수화물', '단백질'],
        feedback: '정답! 비타민 D는 칼슘 흡수를 도와 뼈를 튼튼하게 만들어요. 부족하면 구루병 위험이 있어요.'
    },
    {
        case: '조금만 움직여도 숨이 차고 어지러우며, 얼굴이 창백해졌어요. 병원에서 빈혈 진단을 받았어요.',
        culprit: '철분',
        options: ['물', '철분', '비타민 C', '지방'],
        feedback: '딩동댕! 철분은 혈액 속에서 산소를 운반하는 역할을 해요. 부족하면 빈혈이 생길 수 있어요.'
    }
];

const mealFoods = [
    { name: '흑미밥', group: '곡류' }, { name: '흰쌀밥', group: '곡류' }, { name: '빵', group: '곡류' },
    { name: '닭갈비', group: '고기/생선/계란/콩류' }, { name: '고등어구이', group: '고기/생선/계란/콩류' }, { name: '계란찜', group: '고기/생선/계란/콩류' },
    { name: '시금치무침', group: '채소류' }, { name: '배추김치', group: '채소류' }, { name: '오이무침', group: '채소류' },
    { name: '사과', group: '과일류' }, { name: '방울토마토', group: '과일류' },
    { name: '우유', group: '우유/유제품류' }, { name: '멸치볶음', group: '우유/유제품류' },
    { name: '견과류', group: '유지/당류' }
];

document.addEventListener('DOMContentLoaded', () => {
    const nutrientHub = document.getElementById('nutrient-hub').querySelector('.grid');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // 1. Nutrient Hub Setup
    Object.values(nutrientData).forEach(n => {
        const card = document.createElement('div');
        card.className = `nutrient-card ${n.color} p-4 md:p-6 rounded-2xl text-white text-center cursor-pointer shadow-md`;
        card.dataset.id = n.id;
        card.innerHTML = `
            <div class="text-5xl mb-3">${n.emoji}</div>
            <h3 class="text-xl font-bold">${n.name}</h3>
        `;
        card.addEventListener('click', () => showModal(n.id));
        nutrientHub.appendChild(card);
    });

    function showModal(id) {
        const n = nutrientData[id];
        modalContent.innerHTML = `
            <div class="text-center mb-6">
                <span class="text-6xl">${n.emoji}</span>
                <h2 class="text-3xl font-bold mt-2 ${n.color.replace('bg-', 'text-')}">${n.name}</h2>
                <p class="text-xl text-stone-600 font-semibold">"${n.title}"</p>
            </div>
            <div class="space-y-4">
                <div>
                    <h4 class="font-bold text-lg mb-1">역할 비유 💬</h4>
                    <p class="text-stone-700">${n.metaphor}</p>
                </div>
                <div>
                    <h4 class="font-bold text-lg mb-1">자세한 설명 📖</h4>
                    <p class="text-stone-700">${n.description}</p>
                </div>
                <div>
                    <h4 class="font-bold text-lg mb-1">대표 식품 🥗</h4>
                    <div class="flex flex-wrap gap-2">
                        ${n.foods.map(food => `<span class="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">${food}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    modalCloseBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    });
    
    modal.addEventListener('click', (e) => {
         if(e.target === modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
         }
    });

    // 2. Activity 1: Food Classification
    const foodDeck = document.getElementById('food-deck');
    activityFoods.forEach(food => {
        const foodEl = document.createElement('div');
        foodEl.className = 'food-item bg-white px-4 py-2 rounded-lg shadow-sm cursor-grab';
        foodEl.textContent = food.name;
        foodEl.draggable = true;
        foodEl.dataset.type = food.type;
        foodDeck.appendChild(foodEl);
    });
    
    let draggedItem = null;
    document.querySelectorAll('.food-item').forEach(item => {
        item.addEventListener('dragstart', (e) => {
            draggedItem = e.target;
            setTimeout(() => e.target.style.display = 'none', 0);
        });
        item.addEventListener('dragend', (e) => {
            setTimeout(() => {
                draggedItem.style.display = 'inline-block';
                draggedItem = null;
            }, 0);
        });
    });

    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('over');
        });
        zone.addEventListener('dragleave', (e) => {
            zone.classList.remove('over');
        });
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('over');
            const zoneType = zone.id.split('-')[0];
            const itemType = draggedItem.dataset.type;

            const feedbackEl = document.createElement('div');
            feedbackEl.className = 'feedback';
            zone.appendChild(feedbackEl);

            if (zoneType === itemType || (zoneType === 'energy' && itemType === 'fat')) { // fat is also energy
                zone.querySelector('.flex').appendChild(draggedItem);
                draggedItem.style.cursor = 'default';
                draggedItem.draggable = false;
                feedbackEl.textContent = '👍';
                feedbackEl.classList.add('correct');
            } else {
                feedbackEl.textContent = '🤔';
                feedbackEl.classList.add('incorrect');
            }
            setTimeout(() => feedbackEl.remove(), 1000);
        });
    });

    // 3. Activity 2: Nutrient Detective
    const caseDesc = document.getElementById('case-description');
    const optionsContainer = document.getElementById('options');
    const detectiveFeedback = document.getElementById('detective-feedback');
    const nextCaseBtn = document.getElementById('next-case-btn');
    let currentCaseIndex = 0;

    function loadCase(index) {
        const currentCase = detectiveCases[index];
        caseDesc.textContent = currentCase.case;
        optionsContainer.innerHTML = '';
        detectiveFeedback.innerHTML = '';
        nextCaseBtn.classList.add('hidden');

        currentCase.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'w-full bg-gray-200 hover:bg-gray-300 p-3 rounded-lg transition';
            btn.textContent = opt;
            btn.addEventListener('click', () => checkAnswer(opt, currentCase));
            optionsContainer.appendChild(btn);
        });
    }

    function checkAnswer(selected, currentCase) {
        document.querySelectorAll('#options button').forEach(b => b.disabled = true);
        if (selected === currentCase.culprit) {
            detectiveFeedback.textContent = currentCase.feedback;
            detectiveFeedback.className = 'mt-4 text-center font-bold text-green-600';
        } else {
            detectiveFeedback.textContent = `오답! 정답은 ${currentCase.culprit}입니다.`;
            detectiveFeedback.className = 'mt-4 text-center font-bold text-red-600';
        }
        if (currentCaseIndex < detectiveCases.length - 1) {
            nextCaseBtn.classList.remove('hidden');
        }
    }
    
    nextCaseBtn.addEventListener('click', () => {
        currentCaseIndex++;
        loadCase(currentCaseIndex);
    });
    
    loadCase(currentCaseIndex);

    // 4. Activity 3: Build-a-Meal
    const foodGallery = document.getElementById('meal-food-gallery');
    const plate = document.getElementById('plate');
    const resetMealBtn = document.getElementById('reset-meal-btn');
    const platePlaceholder = plate.querySelector('span');
    let mealChart;

    function setupMealBuilder() {
        foodGallery.innerHTML = '';
        plate.innerHTML = '';
        plate.appendChild(platePlaceholder);
        platePlaceholder.style.display = 'block';

        mealFoods.forEach(food => {
            const foodEl = document.createElement('div');
            foodEl.className = 'draggable-food bg-white px-3 py-1.5 rounded-lg shadow-sm text-center';
            foodEl.textContent = food.name;
            foodEl.draggable = true;
            foodEl.dataset.group = food.group;
            foodGallery.appendChild(foodEl);
        });
        
        document.querySelectorAll('.draggable-food').forEach(item => {
            item.addEventListener('dragstart', e => {
                e.dataTransfer.setData('text/plain', JSON.stringify({
                    name: item.textContent,
                    group: item.dataset.group
                }));
            });
        });
    }
    
    plate.addEventListener('dragover', e => e.preventDefault());
    plate.addEventListener('drop', e => {
        e.preventDefault();
        const foodData = JSON.parse(e.dataTransfer.getData('text/plain'));
        
        if (plate.contains(platePlaceholder)) {
            platePlaceholder.style.display = 'none';
        }

        const foodOnPlate = document.createElement('span');
        foodOnPlate.className = 'bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm';
        foodOnPlate.textContent = foodData.name;
        foodOnPlate.dataset.group = foodData.group;
        plate.appendChild(foodOnPlate);

        updateMealChart();
    });

    function updateMealChart() {
        const foodsOnPlate = Array.from(plate.querySelectorAll('span[data-group]'));
        const groupCounts = {
            '곡류': 0,
            '고기/생선/계란/콩류': 0,
            '채소류': 0,
            '과일류': 0,
            '우유/유제품류': 0,
            '유지/당류': 0,
        };

        foodsOnPlate.forEach(food => {
            const group = food.dataset.group;
            if (group in groupCounts) {
                groupCounts[group]++;
            }
        });

        const data = Object.values(groupCounts);
        mealChart.data.datasets[0].data = data;
        mealChart.update();
    }

    function createMealChart() {
        const ctx = document.getElementById('meal-chart').getContext('2d');
        mealChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['곡류', '고기/생선', '채소', '과일', '우유/유제품', '유지/당'],
                datasets: [{
                    label: '식품군',
                    data: [0, 0, 0, 0, 0, 0],
                    backgroundColor: [
                        'rgba(251, 191, 36, 0.7)', // amber-400
                        'rgba(239, 68, 68, 0.7)',  // red-500
                        'rgba(34, 197, 94, 0.7)', // green-500
                        'rgba(249, 115, 22, 0.7)', // orange-500
                        'rgba(255, 255, 255, 0.7)', // white
                        'rgba(168, 85, 247, 0.7)'  // purple-500
                    ],
                    borderColor: [
                        'rgba(251, 191, 36, 1)',
                        'rgba(239, 68, 68, 1)',
                        'rgba(34, 197, 94, 1)',
                        'rgba(249, 115, 22, 1)',
                        'rgba(209, 213, 219, 1)',
                        'rgba(168, 85, 247, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 20,
                            padding: 15
                        }
                    },
                    title: {
                        display: true,
                        text: '나의 식사 식품 구성 자전거'
                    }
                }
            }
        });
    }
    
    resetMealBtn.addEventListener('click', () => {
        setupMealBuilder();
        updateMealChart();
    });

    setupMealBuilder();
    createMealChart();
});