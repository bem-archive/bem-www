<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:lego="https://lego.yandex-team.ru"
    exclude-result-prefixes=" lego "
    version="1.0">

    
<xsl:template match="lego:b-form-button//lego:text" mode="lego:block-class-content">
    <xsl:apply-imports/>
    <xsl:text> i-font_face_konkord b-form-button__text_font_custom</xsl:text>
</xsl:template>

</xsl:stylesheet>
