<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:lego="https://lego.yandex-team.ru"
    exclude-result-prefixes=" lego "
    version="1.0">

<xsl:template match="lego:b-popupa//lego:row">
    <div>
        <xsl:apply-templates select="." mode="lego:block-attributes"/>
        <xsl:apply-templates select="." mode="lego:content"/>
    </div>
</xsl:template>

</xsl:stylesheet>


