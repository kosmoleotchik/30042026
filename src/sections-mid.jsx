/* global React */
const { useState, useRef, useEffect } = React;

function Expert({ onOpenLightbox }) {
  const [idx, setIdx] = useState(0);

  const slides = [
    { type: 'img', src: 'assets/certificate-diploma.jpg', alt: 'Диплом специалиста' },
    { type: 'ph', label: 'Сертификат / Повышение квалификации' },
    { type: 'ph', label: 'Свидетельство о членстве в СРО' },
    { type: 'ph', label: 'Удостоверение судебного эксперта' },
    { type: 'ph', label: 'Благодарственное письмо' },
  ];
  const total = slides.length;
  const go = (i) => setIdx((i + total) % total);

  return (
    <section className="section" id="expert">
      <div className="container">
        <div className="expert__badge"><MIcon name="badge" size={22}/></div>
        <h2 style={{marginBottom: 48}}>Сведения об эксперте</h2>

        <div className="expert__grid">
          <div className="expert__bio">
            <div className="expert__head">
              <div className="expert__photo">
                <img src="assets/expert-photo.jpg" alt="Родион Александрович Стрелков"/>
              </div>
              <div>
                <div className="expert__name">Родион Александрович Стрелков</div>
                <div className="expert__role">Независимый судебный эксперт</div>
                <a href="#contact" className="btn btn--primary" style={{padding: '10px 22px', fontSize: 14}}>
                  Написать эксперту
                </a>
              </div>
            </div>

            <div className="expert__section">
              <h4><MIcon name="school" size={20}/> Образование</h4>
              <p>Высшее образование МГТУ им. Баумана по направлению «Судебная экспертиза». Квалификация — инженерно-технические экспертизы.</p>
            </div>

            <div className="expert__section">
              <h4>Профессиональный опыт</h4>
              <p>Более семи лет практики в области компьютерно-технических исследований. Подготовка заключений для арбитражных и общеюрисдикционных судов, участие в судебных заседаниях в качестве специалиста и эксперта.</p>
            </div>
          </div>

          <div className="carousel">
            <div className="carousel__label">Документы и сертификаты</div>
            <div className="carousel__viewport">
              <div className="carousel__track" style={{ transform: `translateX(-${idx * 100}%)` }}>
                {slides.map((s, i) => (
                  <div className="carousel__slide" key={i}>
                    {s.type === 'img' ? (
                      <img src={s.src} alt={s.alt} onClick={() => onOpenLightbox && onOpenLightbox(s.src)}/>
                    ) : (
                      <div className="cert-placeholder">[ {s.label} ]</div>
                    )}
                  </div>
                ))}
              </div>
              <button className="carousel__btn carousel__btn--prev" aria-label="Назад" onClick={() => go(idx - 1)}>
                <IconChevronLeft/>
              </button>
              <button className="carousel__btn carousel__btn--next" aria-label="Вперёд" onClick={() => go(idx + 1)}>
                <IconChevronRight/>
              </button>
            </div>
            <div className="carousel__dots">
              {slides.map((_, i) => (
                <button key={i} className={`carousel__dot ${i === idx ? 'carousel__dot--active' : ''}`}
                        onClick={() => setIdx(i)} aria-label={`Слайд ${i + 1}`}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  const items = [
    { icon: 'fact_check', title: 'Процессуальная корректность',
      body: 'Заключения оформляются в соответствии с требованиями процессуального законодательства и методическими рекомендациями.' },
    { icon: 'forum', title: 'Экспертиза без посредников',
      body: 'Работа напрямую с экспертом без экспертных центров и менеджеров — решения и сроки согласовываются лично.' },
    { icon: 'account_balance', title: 'Судебная практика',
      body: 'Опыт подготовки заключений для судов общей юрисдикции и арбитражных судов, участие в заседаниях.' },
    { icon: 'language', title: 'Работа по всей России',
      body: 'Большинство исследований проводится дистанционно. Личный приём материалов возможен в Москве и Московской области.' },
    { icon: 'memory', title: 'Современные методики',
      body: 'Используются актуальные программные средства криминалистического анализа и общепризнанные методики.' },
  ];
  return (
    <section className="section section--soft" id="advantages">
      <div className="container">
        <div className="section-title"><h2>Почему выбирают меня?</h2></div>
        <div className="advantages__grid">
          {items.map((it, i) => (
            <div className="advantage" key={i}>
              <h3><MIcon name={it.icon} size={22}/>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { title: 'Первичная консультация, анализ ситуации',
      body: ['Разбор задачи, оценка её выполнимости и выбор вида экспертизы. Обсуждение исходных данных, сроков и стоимости.'] },
    { title: 'Формирование вопросов экспертизы',
      body: [
        'Составление и согласование вопросов, которые будут поставлены перед экспертом.',
        'Формулировки приводятся к виду, пригодному для процессуальных документов и однозначного толкования.',
      ] },
    { title: 'Исследование предоставленных материалов',
      body: [
        'Приём и фиксация цифровых носителей и документов. Создание криминалистических копий, проверка целостности данных.',
        'Применение методик исследования с документированием каждого действия.',
      ] },
    { title: 'Подготовка письменного заключения',
      body: ['Оформление заключения с описанием исходных данных, хода исследования, применённых методик, результатов и выводов по каждому вопросу.'] },
    { title: 'При необходимости участие в судебном заседании',
      body: ['Явка в суд в качестве эксперта или специалиста, устные пояснения, ответы на вопросы участников процесса.'] },
  ];
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-title"><h2>Этапы исследования</h2></div>
        <div className="process">
          <div className="process__list">
            {steps.map((s, i) => (
              <div className="step" key={i}>
                <div className="step__num">{i + 1}</div>
                <div className="step__body">
                  <div className="step__title">{s.title}</div>
                  {s.body.map((p, j) => <p key={j}>{p}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Objects() {
  const cards = [
    { icon: 'desktop_windows', title: 'Компьютерно-техническая', body: 'Исследование компьютеров, ноутбуков, рабочих станций и цифровых следов пользователя.' },
    { icon: 'devices_other', title: 'Мобильные устройства', body: 'Исследование смартфонов, планшетов, мобильных приложений, файлов и следов использования.' },
    { icon: 'hard_drive', title: 'HDD и SSD', body: 'Анализ состояния носителя, структуры разделов, файловой системы и следов использования.' },
    { icon: 'forum', title: 'Переписка', body: 'Исследование сообщений в мессенджерах, социальных сетях, корпоративных чатах.' },
    { icon: 'mail', title: 'Электронная почта', body: 'Исследование почтовых сообщений, заголовков, вложений, маршрута доставки.' },
    { icon: 'cloud', title: 'Облачное хранилище', body: 'Исследование структуры хранения данных, каталогов, разделов, сигнатур и свойств файлов.' },
  ];
  return (
    <section className="section section--soft" id="objects">
      <div className="container">
        <div className="section-title"><h2>Экспертизы по объектам<br/>исследования</h2></div>
        <div className="objects__grid">
          {cards.map((c, i) => (
            <div className="object-card" key={i}>
              <div className="object-card__icon"><MIcon name={c.icon} size={32} weight={300}/></div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <a href="#contact" className="btn btn--primary">Смотреть все объекты</a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Expert, Advantages, Process, Objects });