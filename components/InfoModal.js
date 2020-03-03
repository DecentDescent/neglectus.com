export default class InfoModal extends React.Component {
  render() {
    return (
      <div className="info-modal">
        <div className="info-modal-content">
          <p>
            Usnul, protože ho ovládla spavá nemoc. Chcete vědět víc? Tady máte
            příležitost.
          </p>
          <p>
            Musíme vás však varovat. Chystáte se vstoupit do říše démonů.
            Opomíjených netvorů, se kterými už léta bojujeme.
          </p>
          <p>Lékaři bez hranic</p>
          <a className="btn btn--share" href="https://www.nevsimejtesinas.cz">
            I přesto chci vstoupit
          </a>
        </div>
      </div>
    );
  }
}
