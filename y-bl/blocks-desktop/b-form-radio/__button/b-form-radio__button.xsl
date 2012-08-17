<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:x="http://www.yandex.ru/xscript"
    xmlns:lego="https://lego.yandex-team.ru"
    exclude-result-prefixes=" x lego "
    version="1.0">

<xsl:template match="lego:b-form-radio/lego:button |
                     lego:b-form-radio/lego:colorpicker/lego:button">
    <label>
        <xsl:apply-templates select="." mode="lego:block-attributes"/>
        <xsl:attribute name="for">
            <xsl:apply-templates select="." mode="lego:id-content" />
        </xsl:attribute>
        <xsl:apply-templates select="." mode="lego:inner"/>
    </label>
</xsl:template>

<xsl:template match="lego:b-form-radio/lego:button |
                     lego:b-form-radio/lego:colorpicker/lego:button" mode="lego:block-class-content">
    <xsl:apply-imports/>
    <xsl:if test="not(preceding-sibling::lego:button or preceding-sibling::lego:colorpicker or following-sibling::lego:button or following-sibling::lego:colorpicker) and not(../preceding-sibling::lego:colorpicker or ../preceding-sibling::lego:button or ../following-sibling::lego:colorpicker or ../following-sibling::lego:button)"> b-form-radio__button_side_both</xsl:if>
    <xsl:if test="(not(preceding-sibling::lego:button or preceding-sibling::lego:colorpicker) and not(../preceding-sibling::lego:colorpicker or ../preceding-sibling::lego:button)) and (following-sibling::lego:button or following-sibling::lego:colorpicker or ../following-sibling::lego:colorpicker or ../following-sibling::lego:button)"> b-form-radio__button_side_left</xsl:if>
    <xsl:if test="preceding-sibling::lego:button[@lego:checked = 'yes'] = preceding-sibling::lego:button[1]"> b-form-radio__button_next-for-checked_yes</xsl:if>
    <xsl:if test="(not(following-sibling::lego:button or following-sibling::lego:colorpicker) and not(../following-sibling::lego:colorpicker or ../following-sibling::lego:button)) and (preceding-sibling::lego:button or preceding-sibling::lego:colorpicker or ../preceding-sibling::lego:colorpicker or ../preceding-sibling::lego:button)"> b-form-radio__button_side_right</xsl:if>
</xsl:template>

<xsl:template match="lego:b-form-radio/lego:button |
                     lego:b-form-radio/lego:colorpicker/lego:button" mode="lego:inner">
    <span class="b-form-radio__inner">
        <span class="b-form-radio__content">
            <input type="radio" name="{ancestor::lego:b-form-radio/@name}" class="b-form-radio__radio">
                <xsl:apply-templates select="." mode="lego:input-attributes"/>
            </input>
            <span class="b-form-radio__text">
                <xsl:apply-templates select="lego:b-icon"/>
                <xsl:value-of select="."/>
            </span>
        </span>
    </span>
</xsl:template>

<xsl:template match="lego:b-form-radio/lego:button[@id] |
                     lego:b-form-radio/lego:colorpicker/lego:button[@id]" mode="lego:id-content">
    <xsl:value-of select="@id"/>
</xsl:template>

<xsl:template match="lego:b-form-radio/lego:button[not(@id)] |
                     lego:b-form-radio/lego:colorpicker/lego:button[not(@id)]" mode="lego:id-content">
    <xsl:value-of select="generate-id(.)"/>
</xsl:template>

<xsl:template match="lego:b-form-radio/lego:button |
                     lego:b-form-radio/lego:colorpicker/lego:button" mode="lego:input-attributes">
    <xsl:if test="@lego:disabled = 'yes'">
        <xsl:attribute name="disabled">disabled</xsl:attribute>
    </xsl:if>
    <xsl:if test="@lego:checked = 'yes'">
        <xsl:attribute name="checked">checked</xsl:attribute>
    </xsl:if>
    <xsl:apply-imports/>
</xsl:template>

</xsl:stylesheet>
