import React from 'react';
import { useTranslation } from 'react-i18next';

interface Image {
  src: string;
  alt: string;
  title?: string;
}

interface ImageGridProps {
  images: Image[];
  title?: string;
  columnsMobile?: number; // Número de columnas en mobile
  columnsTablet?: number; // Número de columnas en tablet
  columnsDesktop?: number; // Número de columnas en desktop
}

const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  title,
  columnsMobile = 1, // Valor por defecto para mobile
  columnsTablet = 2, // Valor por defecto para tablet
  columnsDesktop = 2, // Valor por defecto para desktop
}) => {
  
  const { t } = useTranslation();

  return (
    <div className="mb-10">
      {/* Título principal de la galería */}
      {title && (
        <div className="w-full">
          <h4 className="text-4xl uppercase text-center py-5 lg:text-center">
            {t(title)}
          </h4>
        </div>
      )}

      {/* Galería de imágenes */}
      <div
        className={`grid gap-5
          grid-cols-${columnsMobile}
          md:grid-cols-${columnsTablet}
          lg:grid-cols-${columnsDesktop}`}
      >
        {images.map((image, index) => (
          <article key={index} className="w-full flex flex-col justify-center items-center">
            {/* Título individual de la imagen */}
            {image.title && (
              <h5 className="text-2xl text-center py-5 uppercase lg:text-center">{t(image.title)}</h5>
            )}
            <div className="w-full">
              <img
                className="appear-animation w-full"
                src={image.src}
                alt={t(image.alt)}
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
