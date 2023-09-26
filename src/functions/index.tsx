export const calculateDiscount = (originalPrice: number | undefined, discountPercentage: number | undefined) => {
    if (originalPrice !== undefined && discountPercentage !== undefined) {
        const discountPrice = originalPrice - (originalPrice * (discountPercentage / 100));
        return +discountPrice.toFixed(2);
    } else {
        return NaN;
    }
}

