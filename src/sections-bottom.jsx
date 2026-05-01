/* global React */
const { useState } = React;

function Examples() {
  const cards = [
    { n: 1, body: 'Исследование ноутбука сотрудника на предмет копирования корпоративных данных на внешний носитель. Восстановление удалённых файлов.',
      year: '2023 г.', cat: 'Компьютерно-техническая', status: 'Принято судом' },
    { n: 2, body: 'Анализ переписки в мессенджере на предмет подлинности сообщений, установление временных меток и авторства.',
      year: '2024 г.', cat: 'Компьютерно-техническая', status: 'Принято судом' },
    { n: 3, body: 'Исследование образа жёсткого диска сервера, восстановление структуры разделов и файлов.',
      year: '2025 г.', cat: 'Компьютерно-техническая', status: 'Принято судом' },
    { n: 4, body: 'Рецензирование заключения по делу о неправомерном доступе к компьютерной информации. Оценка методической обоснованности выводов.',
      year: '2025 г.', cat: 'Компьютерно-техническая', status: 'Принято судом' },
    { n: 5, body: 'Исследование мобильного устройства: восстановление переписки, фото и геолокационных данных.',
      year: '2026 г.', cat: 'Компьютерно-техническая', status: 'Принято судом' },
  ];
  return (
    <section className="section section--soft" id="examples">
      <div className="container">
        <div className="section-title"><h2>Примеры экспертиз</h2></div>
        <div className="examples__grid">
          {cards.map(c => (
            <div className="example-card" key={c.n}>
              <h3>Пример экспертизы № {c.n}</h3>
              <div className="example-card__body">{c.body}</div>
              <div className="example-card__meta">
                <div className="example-card__row"><span className="k">Год исследования</span><span className="v">{c.year}</span></div>
                <div className="example-card__row"><span className="k">Категория</span><span className="v">{c.cat}</span></div>
                <div className="example-card__row"><span className="k">Статус</span><span className="v">{c.status}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: 'Будет ли заключение принято судом?',
      a: 'Да. Заключение оформляется в соответствии с требованиями процессуального законодательства: указываются исходные данные, методики, ход исследования и обоснованные выводы. Эксперт предупреждается об уголовной ответственности по ст. 307 УК РФ, если этого требует процессуальный статус.' },
    { q: 'Можно ли провести экспертизу дистанционно?',
      a: 'В большинстве случаев — да. Материалы могут быть переданы по защищённому каналу либо почтовой отправкой с фиксацией целостности. Личная встреча требуется только при работе с носителями, которые нельзя отправлять.' },
    { q: 'Сколько времени занимает проведение экспертизы?',
      a: 'От 5 рабочих дней для несложных задач до 3–4 недель для комплексных исследований с большим объёмом данных. Точные сроки согласовываются после оценки материалов.' },
    { q: 'Будет ли заключение принято судом?',
      a: 'Заключение составляется с учётом требований АПК РФ, ГПК РФ и УПК РФ. На практике заключения принимаются и приобщаются к материалам дела без возражений.' },
    { q: 'Что нужно для проведения экспертизы?',
      a: 'Постановление или определение суда (для судебной экспертизы) либо договор (для досудебной), а также объекты исследования: устройства, копии, выгрузки, документы, касающиеся поставленных вопросов.' },
  ];
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-title"><h2>Вопросы и ответы</h2></div>
        <div className="faq">
          {items.map((it, i) => (
            <div className={`faq__item ${openIdx === i ? 'faq__item--open' : ''}`} key={i}>
              <button className="faq__q" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="chev"><IconChevronDown/></span>
              </button>
              <div className="faq__a">
                <div className="faq__a-inner">{it.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', msg: '', consent: false });
  const [errs, setErrs] = useState({});
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm({ ...form, [k]: v });
    if (errs[k]) setErrs({ ...errs, [k]: null });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Укажите имя';
    if (!form.email.trim() && !form.phone.trim()) {
      e.email = 'Укажите email или телефон';
      e.phone = 'Укажите email или телефон';
    } else {
      if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Некорректный email';
    }
    if (!form.msg.trim()) e.msg = 'Опишите задачу';
    if (!form.consent) e.consent = 'Требуется согласие';
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrs(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      setForm({ name: '', email: '', phone: '', msg: '', consent: false });
      setTimeout(() => setSent(false), 6000);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <form className="contact" onSubmit={submit} noValidate>
          <h2>Остались вопросы?</h2>
          <p className="sub">Отправьте Ваш запрос и получите бесплатную консультацию от эксперта</p>
          <div className="contact__grid">
            <div>
              <div className={`field ${errs.name ? 'field--error' : ''}`}>
                <label>Имя</label>
                <input value={form.name} onChange={update('name')} placeholder="Анастасия Александровна"/>
                {errs.name && <span className="field__err">{errs.name}</span>}
              </div>
              <div className={`field ${errs.email ? 'field--error' : ''}`} style={{marginTop: 16}}>
                <label>Электронная почта</label>
                <input type="email" value={form.email} onChange={update('email')}/>
                {errs.email && <span className="field__err">{errs.email}</span>}
              </div>
              <div className={`field ${errs.phone ? 'field--error' : ''}`} style={{marginTop: 16}}>
                <label>Телефон</label>
                <input value={form.phone} onChange={update('phone')}/>
                {errs.phone && <span className="field__err">{errs.phone}</span>}
              </div>
            </div>
            <div className="contact__right">
              <div className={`field ${errs.msg ? 'field--error' : ''}`} style={{flex: 1}}>
                <label>Сообщение</label>
                <textarea value={form.msg} onChange={update('msg')}/>
                {errs.msg && <span className="field__err">{errs.msg}</span>}
              </div>
              <label className="consent">
                <input type="checkbox" checked={form.consent} onChange={update('consent')}/>
                <span>
                  Я даю согласие на обработку своих персональных данных и подтверждаю, что ознакомлен(а) с <a href="privacy.html" className="inline-link">Политикой обработки персональных данных</a>.
                  {errs.consent && <span className="field__err" style={{display:'block', marginTop: 4}}>{errs.consent}</span>}
                </span>
              </label>
            </div>
            <div className="contact__submit">
              <button type="submit" className="btn btn--primary" style={{minWidth: 200}}>Отправить</button>
            </div>
            {sent && (
              <div className="contact__success" style={{gridColumn: '1 / -1'}}>
                <MIcon name="check_circle" size={20}/> Сообщение отправлено. Я свяжусь с вами в ближайшее время.
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand-col">
            <div className="footer__brand">Экспертная практика<br/>Стрелкова</div>
          </div>
          <div>
            <h5>Меню</h5>
            <ul className="footer__list">
              <li><a href="#conclusions">Заключения</a></li>
              <li><a href="#expert">Эксперт</a></li>
              <li><a href="#advantages">Преимущества</a></li>
              <li><a href="#process">Этапы</a></li>
              <li><a href="#objects">Объекты</a></li>
              <li><a href="#examples">Примеры</a></li>
              <li><a href="pricing.html">Стоимость</a></li>
              <li><a href="#faq">Вопросы и ответы</a></li>
              <li><a href="#contact">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h5>Контакты</h5>
            <div className="footer__contacts">
              <div className="footer__row footer__row--lg"><MIcon name="call" size={26}/><span className="big">+7 (999) 962-90-15</span></div>
              <div className="footer__row footer__row--lg"><MIcon name="mail" size={26}/><a href="mailto:rstrelkov@inbox.ru" className="email">rstrelkov@inbox.ru</a></div>
              <div style={{color:'var(--footer-ink-muted)', fontSize:13, marginTop: 4}}>Режим работы: 12:00-20:00, Пн-Пт.</div>
              <div className="footer__socials">
                <a className="footer__social" href="#"><span className="icon"><IconWhatsApp size={22}/></span>WhatsApp</a>
                <a className="footer__social" href="#"><span className="icon"><IconTelegram size={22}/></span>Telegram</a>
                <a className="footer__social" href="#"><span className="icon"><IconMax size={22}/></span>MAX</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div>© 2024–2026 г. <a href="privacy.html">Политика конфиденциальности</a></div>
          <div>ИП Стрелков Александрович · ИНН 091706875564 · ОГРНИП 325010000032740</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Examples, FAQ, Contact, Footer });
