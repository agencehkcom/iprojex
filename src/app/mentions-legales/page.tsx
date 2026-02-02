import Container from "@/components/ui/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | IPROJEX",
  description: "Mentions légales du site IPROJEX - Expert en flocage coupe-feu",
};

export default function MentionsLegales() {
  return (
    <main className="bg-light min-h-screen py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-dark mb-12">Mentions Légales</h1>

          <div className="space-y-10 text-dark/80">
            {/* Éditeur du site */}
            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">Éditeur du site</h2>
              <p>
                <strong>IProjex</strong><br />
                3 rue Magnier Bedu<br />
                95410 Groslay<br />
                France<br />
                <strong>SIRET :</strong> 839 856 531 00026
              </p>
            </section>

            {/* Réalisation du site */}
            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">Réalisation du site</h2>
              <p>
                <strong>Agence HKCOM</strong><br />
                SIRET : 882 244 353 00026<br />
                19 bis rue de l&apos;orangerie<br />
                Grande Synthe<br />
                France
              </p>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">Hébergement</h2>
              <p>
                Le présent site est hébergé par <strong>O2switch</strong>, domiciliée 224 BD Gustave Flaubert à Clermont-Ferrand 63000 – France
              </p>
            </section>

            {/* Conditions générales */}
            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">Conditions générales d&apos;utilisation</h2>
              <p className="mb-4">
                Le site accessible par l&apos;url <a href="https://www.iprojex-flocage.fr" className="text-primary hover:underline">https://www.iprojex-flocage.fr</a> est exploité dans le respect de la législation française. L&apos;utilisation de ce site est régie par les présentes conditions générales. En utilisant le site, vous reconnaissez avoir pris connaissance de ces conditions et les avoir acceptées. Celles-ci pourront être modifiées à tout moment et sans préavis par la société IPROJEX.
              </p>
              <p className="mb-4">
                IPROJEX ne saurait être tenu pour responsable en aucune manière d&apos;une mauvaise utilisation du service.
              </p>
              <p className="mb-4">
                Votre utilisation de ce site web constitue votre acceptation des conditions générales et mentions d&apos;avertissement. Ce site peut contenir des liens vers d&apos;autres sites web. IPROJEX n&apos;assume aucune responsabilité sur le contenu des sites autres que ceux faisant partie du domaine www.iprojex-flocage.fr.
              </p>
              <p>
                L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables, les représentations iconographiques et photographiques, ainsi que les contenus rédactionnels. Les marques citées appartiennent à leurs propriétaires respectifs. La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de publication. Vous vous engagez à ne pas utiliser ce site à des fins illicites ou interdites par les lois ou par les mentions légales et contractuelles.
              </p>
            </section>

            {/* Respect de la vie privée */}
            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">Respect de la vie privée</h2>
              <p>
                Conformément à la loi « Informatique et Liberté » du 06 Janvier 1978, vous disposez d&apos;un droit d&apos;accès et de rectification des données vous concernant. Pour cela il suffit de nous contacter (en nous indiquant vos coordonnées et le cas échéant votre n° client).
              </p>
            </section>

            {/* Droit d'auteur */}
            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">Droit d&apos;auteur – Copyright</h2>
              <p>
                Tous les éléments de toute nature (images fixes, images animées, photographies, bases de données, marques, illustrations, logos, dessins, modèles, documents téléchargeables, etc.) contenus dans le site www.iprojex-flocage.fr sont protégés par le droit d&apos;auteur. À ce titre, sauf autorisation préalable et écrite de la société IPROJEX, toute reproduction, représentation, adaptation, modification partielle ou intégrale de tout élément composant le site, par quelque moyen que ce soit, est interdite sous peine de poursuite judiciaire.
              </p>
            </section>

            {/* Nom et logo */}
            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">Nom et logo</h2>
              <p>
                Il est strictement interdit de reproduire, rééditer ou redistribuer totalement ou partiellement le nom IPROJEX ou son logo, seul ou associé à quelque titre que ce soit sans l&apos;accord écrit préalable de IPROJEX.
              </p>
            </section>

            {/* Liens hypertextes */}
            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">Liens hypertextes</h2>
              <p className="mb-4">
                Tout site Internet est autorisé à établir, sans accord préalable, un lien vers les informations diffusées sur le site de IPROJEX. Néanmoins, les pages et les documents issus de www.iprojex-flocage.fr ne doivent pas être imbriqués à l&apos;intérieur des pages d&apos;un autre site.
              </p>
              <p className="mb-4">
                L&apos;autorisation de mise en place d&apos;un lien est valable pour tout support, à l&apos;exception de ceux diffusant des informations à caractère polémique, pornographique, xénophobe ou pouvant, dans une plus large mesure, porter atteinte à la sensibilité du plus grand nombre.
              </p>
              <p>
                IPROJEX ne peut, en aucun cas, être tenu pour responsable des informations diffusées sur les sites qui font l&apos;objet d&apos;un lien hypertexte à partir de www.iprojex-flocage.fr
              </p>
            </section>

            {/* Qualité et utilisation des informations */}
            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">Qualité et utilisation des informations</h2>
              <p>
                IPROJEX s&apos;attache à diffuser une information fiable, vérifiée et régulièrement actualisée. En dépit des nombreux efforts mis en œuvre pour atteindre cet objectif, des erreurs ou omissions peuvent, tout de même, subsister. Il appartient donc à l&apos;internaute, sous sa responsabilité exclusive, d&apos;utiliser les informations disponibles sur www.iprojex-flocage.fr avec discernement. En conséquence, IPROJEX vous recommande de vérifier les informations recueillies sur son site, préalablement à toute prise de décision quant à leur usage.
              </p>
            </section>

            {/* Garanties et responsabilités */}
            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">Garanties et responsabilités</h2>
              <p>
                Les informations diffusées sur le site de IPROJEX sont fournies sans garantie d&apos;aucune sorte, autre que celles prévues par la loi en vigueur, et notamment sans garantie que le contenu réponde aux besoins de l&apos;utilisateur ou à l&apos;usage qu&apos;il sera amené à en faire. L&apos;utilisateur est seul responsable de toute utilisation qu&apos;il fera des informations diffusées sur www.iprojex-flocage.fr. IPROJEX ne pourra pas être tenue responsable des dommages directs ou indirects résultant de l&apos;usage de son site ou d&apos;autres sites qui lui sont liés, et notamment des éventuelles pertes financières ou préjudices commerciaux pouvant en résulter.
              </p>
            </section>

            {/* Loi applicable */}
            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">Loi applicable</h2>
              <p>
                Les présentes Conditions Générales sont soumises au droit interne français. La langue des Conditions Générales est la langue française. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
